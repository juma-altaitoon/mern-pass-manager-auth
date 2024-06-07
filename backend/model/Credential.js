const mongoose = require('mongoose');

const credentialsSchema = mongoose.Schema({
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

const Credential = mongoose.model("Credential", credentialsSchema);

module.exports = Credential;