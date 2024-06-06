const mongoose = require('mongoose');

const passwordSchema = mongoose.Schema({
    accountName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    encryptedPassword: {
        type: String,
        required: true,
        minLength: [8],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

},
{
    timestamps: true
});

const Password = mongoose.model("Password", passwordSchema);

module.exports = Password;