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
    await sequelize.sync({});
    app.listen(PORT, () => {
        console.log(`API is working on port ${PORT}!`);
       
    });
    
}

init();
