const crypto = require('crypto');

class CryptoService {
        
    constructor() {
        this._algorithm = process.env.CRYPTO_ALGORITHM;
        this._secretKey = process.env.CRYPTO_SECRET_KEY;
        this._iv = crypto.randomBytes(16);
    }

    encrypt (text) {
        const cipher = crypto.createCipheriv(this._algorithm, this._secretKey, this._iv);
        const encrypted = Buffer.concat(
            [
                cipher.update(text), 
                cipher.final()
            ]
        );

        return {
            iv: this._iv.toString('hex'),
            content: encrypted.toString('hex')
        };
    }

    decrypt(hash) {
        const decipher = crypto.createDecipheriv(
            this._algorithm, 
            this._secretKey, 
            Buffer.from(hash.iv, 'hex')
        );

        const decrpyted = Buffer.concat(
            [
                decipher.update(Buffer.from(hash.content, 'hex')), 
                decipher.final()
            ]
        );
        return decrpyted.toString();    
    };
    
}

module.exports = new CryptoService();