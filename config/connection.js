require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
    sequelize.authenticate().then(() => {
      console.log('Connnection Successful!');
    }).catch((err) => {
      console.log('Error connecting to database!');
    });

module.exports = sequelize;
