const cryptoService = require('./../../../shared/crypto/crypto');
const EncryptRepository = require('./../repository');

class CreateEncryptService {

    constructor() {
        this._repository = EncryptRepository;
    }

    async execute(text) {
        const encryptValue = cryptoService.encrypt(text);
        this._repository.create(encryptValue);
        return encryptValue;
    }    
}

module.exports = new CreateEncryptService();