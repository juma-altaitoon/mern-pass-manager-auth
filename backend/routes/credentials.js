const router = require('express').Router();
const credentialCtrl = require('../controllers/credentials');
const isLoggedIn = require('../helper/isLoggedIn');

router.get("/credential", isLoggedIn, credentialCtrl.cred_test_get);
router.post("/credential/create", isLoggedIn, credentialCtrl.cred_create_post);
router.get("/credential/list", isLoggedIn, credentialCtrl.cred_list_get);
router.get("/credential/password", isLoggedIn, credentialCtrl.cred_password_get);
router.get("/credential/readone", isLoggedIn, credentialCtrl.cred_readOne_get)
router.put("/credential/update", isLoggedIn, credentialCtrl.cred_update_put);
router.delete("/credential/delete", isLoggedIn, credentialCtrl.cred_delete_get);

module.exports = router;