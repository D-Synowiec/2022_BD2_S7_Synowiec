const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const Helper = {
    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    },

    comparePassword(hashPassword, password) {
        return bcrypt.compareSync(passwrd, hashPassword);
    },

    isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    },

    generateToken(id) {
        const token = jwt.sign({
            userId: id
          },
            process.env.JWTSECRET, { expiresIn: '1d' }
          );
          return token; 
    }
}

export default Helper;