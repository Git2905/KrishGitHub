
//const mysql=require("mysql2");
/*const sqlPool=mysql.createPool({
    host: 'localhost',
    user :'root',
    password : 'Auth@2905',
    database: 'testdb',
    waitForConnections: true,
    connectionLimit:0,
    queueLimit:0
     
}).promise(); */

const Sequelize=require("sequelize");

const sequelize = new Sequelize('testdb', 'root', 'Auth@2905', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 }); 

  module.exports= sequelize;
  