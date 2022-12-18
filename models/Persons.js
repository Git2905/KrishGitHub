const { DataTypes } = require("sequelize");
const sequelize = require('../utils/dbutils');
Persons = sequelize.define("Persons", {
   PersonID:
   {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
   },
   LastName:
   {
      type: DataTypes.STRING,
      allowNull: false
   },
   FirstName:
   {
      type: DataTypes.STRING,
      allowNull: false
   },
   Age:
   {
      type: DataTypes.INTEGER,
      allowNull: false
   }
}
);
Persons.sync();
module.exports = Persons;