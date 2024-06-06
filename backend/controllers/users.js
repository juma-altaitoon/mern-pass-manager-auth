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
    // Future Addition : Input Validation 
    
    const { firstName, lastName, userName, emailAddress, password, pinNumber } = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({emailAddress : emailAddress})
        // console.log(existingUser);
        
    } catch(err){
        console.log(err)
    }
    
    if (existingUser){
        return res.status(400).json({message: "User Exists"});
    } 
    else{
    const user = new User({
        firstName,
        lastName,
        userName,
        emailAddress,
        password,
        pinNumber,
    })
    console.log(user.password)
    let hashPass = bcrypt.hashSync(user.password, salt);
    // let hashPin = bcrypt.hashSync(req.body.pinNumber, salt);
        
    user.password = hashPass;
    // user.pinNumber = hashPin;
    // console.log("hashPass : "+hashPass);

    await user.save()
    .then(()=>{
        res.json({message : "User Created", user : user})
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({message : "User Creation Failed, Please try again later"})
    })
    }
}
// POST - Sign In 
exports.user_signin_post = async(req, res) =>{
    // Input Validatoion
    
    const {emailAddress, password} = req.body;
    
    try {
        let user = await User.findOne({emailAddress : emailAddress})
        if (!user){
            return res.json({message: "User Not Registered"})//Change message to : "Failed Login! Incorrect Email or Password."
        }
        const passwordMatch = await bcrypt.compareSync(password, user.password)
        if (!passwordMatch){
            return res.json({message: "Incoreect Password"});//Change message to : "Failed Login! Incorrect Email or Password."
        }
        // Generate JWT Token
        // Payload
        const payload = {
            user : {
                id : user._id
            },
        };
        jwt.sign(
            payload,
            process.env.SECRET_KEY,
            {expiresIn : 3600000},
            (err, token) => {
                if (err) throw err;
                // console.log("token: ",token);
                res.cookie(
                    user._id,
                    token,
                    {
                        path: "/",
                        expires: new Date( Date.now() + 60000 ),
                        httpOnly: true,
                        samesite: "lax",
                    } 
                )
                return res.status(200).json({ message : "Sign In Successful!", user, token })
            }
        );
    } catch (error) {
        console.log(error)
        res.status(400).json({message : "Sign In Failed! Try again later."})
    }
}

// GET - User Information
exports.user_info_get = async (req, res, next) => {
    const userId = req.id;
    let userInfo;
    try{
        userInfo = await User.findById(userId, "-password");
        // console.log("user info: ", userInfo);
    } catch (error) {
        return new Error(error);
    }
    if (!userInfo){
        return res.status(404).json({message: "User Not Found"});
    }
    return res.status(200).json({ user: userInfo });
}

//GET - Logout 
exports.user_logout_get = (req, res) => {
  // Invalidate the session
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/user/signin");
  });
};