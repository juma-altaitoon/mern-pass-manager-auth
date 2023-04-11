const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get("/user/hello", usersCtrl.user_hello_get);

module.exports = router;
