const express = require('express');
const routes = require('./routes');
// import sequelize connection

const sequelize = require('./config/connection');


// const sequelize = new Sequelize('schema', 'root', '', {
//   dialect: "mysql"
// });

// sequelize.authenticate().then(() => {
//   console.log('Connnection Successful!');
// }).catch((err) => {
//   console.log('Error connecting to database!');
// });



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
