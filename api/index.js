const app = require('./express/app');
const sequelize = require('./sequelize');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

async function checkDatabaseConnection() {
    console.log('Starting app...');
    
    try {
        await sequelize.authenticate();
        console.log('Database connection is ok!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);

        process.exit(1);
    }
}

async function init() {
    await checkDatabaseConnection();

//    const categories = await sequelize.models.Category.findAll();
//    console.log(categories);

   const roles = await sequelize.models.Media.findOne({
        where: {
            id: 1
        },
        include: {
            model: sequelize.models.Media_Dictonary,
            as: 'type_Media_Dictonary'
        }
    });
   console.log(roles.type_Media_Dictonary.name);
    
}

init();
