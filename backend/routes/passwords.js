const router = require('express').Router();
const passwordCtrl = require('../controllers/passwords');
const isLoggedIn = require('../helper/isLoggedIn');

router.get("/password", isLoggedIn, passwordCtrl.password_test_get);
router.post("/password/create", isLoggedIn, passwordCtrl.password_create_post);
router.get("/password/read", isLoggedIn, passwordCtrl.password_read_get);
// router.put("/password/update", isLoggedIn, passwordCtrl.password_update_put);
router.delete("/password/delete", isLoggedIn, passwordCtrl.password_del_delete);

module.exports = router;