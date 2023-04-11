const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get("/user/hello", usersCtrl.user_hello_get);
router.post("/user/signup", usersCtrl.user_signup_post);
router.post("/user/signin", usersCtrl.user_signin_post);

module.exports = router;
