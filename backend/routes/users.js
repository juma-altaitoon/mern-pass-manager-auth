const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const isLoggedIn = require('../helper/isLoggedIn');


router.get("/user/hello", isLoggedIn, usersCtrl.user_hello_get);
router.post("/user/signup", usersCtrl.user_signup_post);
router.post("/user/signin", usersCtrl.user_signin_post);
router.get("/user/info", isLoggedIn, usersCtrl.user_info_get);
router.get('/user/logout', usersCtrl.user_logout_get);


module.exports = router;
