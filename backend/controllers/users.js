const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



// Test
exports.user_hello_get = (req, res) => {
    res.json({Welcome : "Hello User"})
}
