const User = require("../model/User")
const Password = require("../model/Password");
const crypto = require('crypto');

// Password route test
exports.password_test_get = (req, res) => {
    res.json({Welcome: "Password Route Test", userId : req.id})
}
// Password CRUD Operations

// Password Create
exports.password_create_post = async (req, res) => {
    
    let userId = req.id
    const { accountName, username, password} = req.body;
        
    try{
        const cipher = crypto.createCipher('aes-256-cbc', process.env.SECRET_KEY);
        let encryptedPassword = cipher.update(password, 'utf8', 'hex');
        encryptedPassword += cipher.final('hex');
        console.log("Encrypted Passwrord: ", encryptedPassword);
        
        const newPassword = new Password({
            accountName,
            username,
            encryptedPassword,
            user: userId
        });
        console.log(newPassword)
        await newPassword.save()
        .then(() => {
            console.log("saved: ", newPassword )
            res.status(200).json({ message: "Password Added", password: newPassword });
        })
        .catch(error => {
            console.log(error)
            res.json({error: "Failed to save password!"});
        })
    }
    catch (error){
        console.log(error)
        res.json({
            error: error, 
            message: "Failed to Add Password!"
        });
    }
}

// Password Read
exports.password_read_get = async (req, res) => {
    console.log("req.id", req.id);
    console.log("req.body", req.body);
//     try {
//         const user = req.id;

//         const password = await Password.findOne({  })
        
//         const decipher = crypto.createDecipher('aes-256-cbc', process.env.SECRET_KEY);
//         let decryptedPassword = decipher.update(password.encryptedPassword, 'hex', 'utf8');
//         decryptedPassword += decipher.final('utf8')
//         console.log("Decrypted Password: ", decryptedPassword);
        
//         res.json({password: decryptedPassword})        
        
//     } catch (error) {
//         res.status(400).json({error: "Failed to load password"})
//     }
// }
// // Password Update
// exports.password_update_put = async (req, res) =>{
//     await Password.findByIdAndUpdate( req.body.id, req.body, {new : true} )
//     .then ((currentPassword) => {
//         console.log("Current Password", currentPassword);
//         res.status(200).json({message: "Update Success!"});
//     })
//     .catch (error => {
//         console.log(error)
//         res.json({Error: "Update Failed!"});
//     })
}
// Password Delete
exports.password_del_delete = async (req, res) => {
    const id = req.body.id;
    await Password.findByIdAndDelete(id)
}