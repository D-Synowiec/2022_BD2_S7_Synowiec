const jwt = require('jsonwebtoken');
const { models } = require('../../sequelize');


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT);
        const user = await models.User.findOne({
            where: {
              id: decoded.id,
              tokens: token
            }    
          }); 

        if(!user) throw new Error();

       req.token = token;
       req.user = user;
       next();

    } catch (error) {
        res.status(401).send({
            error: 'Unauthenticated'
        })
    }
}

module.exports = auth;
