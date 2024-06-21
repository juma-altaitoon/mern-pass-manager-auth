const User = require("../model/User")
const Credential = require("../model/Credential");
const crypto = require('crypto');

// Credential route test
exports.cred_test_get = (req, res) => {
    res.json({Welcome: "Credential Route Test", userId : req.id})
}
// Credential CRUD Operations

// Credential Create
exports.cred_create_post = async (req, res) => {
    
    let userId = req.id
    const { accountName, username, password} = req.body;
        
    try{
        const cipher = crypto.createCipher('aes-256-cbc', process.env.SECRET_KEY);
        let encryptedPassword = cipher.update(password, 'utf8', 'hex');
        encryptedPassword += cipher.final('hex');
        console.log("Encrypted Passwrord: ", encryptedPassword);
        
        const newCredential = new Credential({
            accountName,
            username,
            encryptedPassword,
            user: userId
        });
        // console.log(newCredential)
        await newCredential.save()
        .then(() => {
            console.log( "saved: ", newCredential )
            res.status(200).json({ message: "Credential Added", credential: newCredential });
        })
        .catch(error => {
            console.log(error)
            res.json({error: "Failed to save Credential!"});
        })
    }
    catch (error){
        console.log(error)
        res.json({
            error: error, 
            message: "Failed to Add Credential!"
        });
    }
}

//Credential List
exports.cred_list_get = async (req, res) => {
    let userId = req.id;
    let credentialList;
    try {
        credentialList = await Credential.find({user : userId}, "-encryptedPassword",)
    } catch (error) {
        console.log(error)
        return new Error(error)
    }
    if(!credentialList){
        return res.status(400).json({message: "Credential List Empty!"});
    }
    return res.status(200).json({"Item(s)": credentialList.length, credentialList});
}

// Credential Password Read
exports.cred_password_get = async (req, res) => {
    // console.log("req.id", req.id);
    // console.log("req.body.id", req.body.id);
    let decryptedPassword;
    try {
        const credId = req.body.id;

        const cred = await Credential.findById(credId, "encryptedPassword");
        console.log("encryptedPassword: ", cred.encryptedPassword)
        const decipher = crypto.createDecipher('aes-256-cbc', process.env.SECRET_KEY);
        decryptedPassword = decipher.update(cred.encryptedPassword, 'hex', 'utf8');
        decryptedPassword += decipher.final('utf8')
        console.log("Decrypted Credential: ", decryptedPassword);        
    } catch (error) {
        res.status(400).json({error: "Failed to load credential"})
        return new Error(error)
    }
    if(!decryptedPassword){
        res.status(400).json({message: "Credential Does not Exist!"})
    }
    return res.json({password: decryptedPassword})
}
// Credential Read One
exports.cred_readOne_get = async (req, res) => {
    let credential;
    try {
        credential = await Credential.findById(req.body.id, "-encryptedPassword")
    } catch (error) {
        console.log(error)
        return new Error(error)
    }
    if(!credential){
        return res.status(400).json({message: "Credential Not Found"});
    }
    return res.status(200).json({credential});
    
}

// Credential Update
exports.cred_update_put = async (req, res) =>{
    const credId = req.body.id
    const { accountName, username, password } = req.body;
    
    const cipher = crypto.createCipher('aes-256-cbc', process.env.SECRET_KEY);
        let encryptedPassword = cipher.update(password, 'utf8', 'hex');
        encryptedPassword += cipher.final('hex');
        console.log("Encrypted Passwrord: ", encryptedPassword);

    await Credential.findByIdAndUpdate( credId, { accountName, username, encryptedPassword }, {new : true} )
    .then ((currentCredential) => {
        console.log("Current Credential", currentCredential);
        res.status(200).json({message: "Update Success!"});
    })
    .catch (error => {
        console.log(error)
        res.json({Error: "Update Failed!"});
    })
}
// Credential Delete
exports.cred_delete_get = async (req, res) => {
    const id = req.body.id;
    await Credential.findByIdAndDelete(id)
    .then(()=>{
        return res.status(200).json("Credential Successfully Deleted.");
    })
    .catch(error => {
        console.log(error)
        return res.status(500).json("Credential Deletion Failed!");
    })
}