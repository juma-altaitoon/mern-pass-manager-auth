const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const salt = 10

// Test
exports.user_hello_get = (req, res) => {
    res.json({Welcome : "Hello User"})
}

// POST Sign Up
exports.user_signup_post = async(req, res) => {
    console.log(req.body);
    let user = new User(req.body)
    let existingUser;
    try{
        existingUser = await User.findOne({emailAddress : user.emailAddress})
        // console.log(existingUser);
    } catch(err){
        console.log(err)
    }
    if (existingUser){
        return res.status(400).json({message: "User Exists"});
    } 
    else{
    console.log(req.body.password)
    let hashPass = bcrypt.hashSync(req.body.password, salt);
    // let hashPin = bcrypt.hashSync(req.body.pinNumber, salt);
        
    user.password = hashPass;
    // user.pinNumber = hashPin;
    // console.log("hashPass : "+hashPass);
    user.save()
    .then(()=>{
        res.json({message : "User Created"})
    })
    .catch(err =>{
        console.log(err)
        res.json({message : "User Creation Failed, Please try again later"})
    })
    }
}
// POST - Sign In 
exports.user_signin_post = async(req, res) =>{
    let {emailAddress, password} = req.body;
    try {
        let user = await User.findOne({emailAddress : emailAddress})
        if (!user){
            return res.json({message: "User Not Registered"})
        }
        const passwordMatch = await bcrypt.compareSync(password, user.password)
        if (!passwordMatch){
            return res.json({message: "Incoreect Password"});
        }

        // Payload
        const payload = {
            user : {
                id : user._id
            },
        };
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn : 3600000},
            (err, token) => {
                if (err) throw err;
                res.status(200).json({token})
            }
        );
        return res.status(200).json({message : "Sign In Successful!"})

    } catch (error) {
        console.log(error)
        res.status(400).json({message : "Sign In Failed! Try again later."})
    }
}
