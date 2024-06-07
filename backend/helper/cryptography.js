const crypto = require('crypto');

exports.encryptPassword = (password) => {
    const cipher = crypto.createCipher('aes-256-cbc', process.env.SECRET_KEY);
    let encryptedPassword = cipher.update(password, 'utf8', 'hex');
    encryptedPassword += cipher.final('hex');
    console.log("Encrypted Passwrord: ", encryptedPassword);
    return encryptedPassword;
}
    
exports.decryptPassword = (encryptedPassword) => {
    const decipher = crypto.createDecipher('aes-256-cbc', process.env.SECRET_KEY);
    let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8');
    decryptedPassword += decipher.final('utf8')
    console.log("Decrypted Credential: ", decryptedPassword);
    return decryptedPassword
}
