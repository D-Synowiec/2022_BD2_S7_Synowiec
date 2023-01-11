const { Sequelize } = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(process.env.PGLINK);

async function test() {
    try {
        await sequelize.authenticate();
        console.log(process.env.PGLINK);
    } catch (e) {
        console.error(e);
    }
}
test();