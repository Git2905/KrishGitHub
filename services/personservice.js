

const Persons = require('../models/Persons');

module.exports =
{
  getAllPersons: function (request) {
    return Persons.findAll(
      {
        raw:true
      }
    );
  },
  getPersonByID: function (request) {

  },

  createPersons: function (body) {
    
    return Persons.create({
      LastName: body.LastName,
      FirstName: body.FirstName,
      Age: body.Age
    });
   /* let promise = new Promise(
      (resolve, reject) => {
        Persons.create({
          LastName: body.LastName,
          FirstName: body.FirstName,
          Age: body.Age
        }).then(result => {

          resolve(result);
        }).catch(err => {
          reject(err);
        })

      }
    );
    return promise;*/




  },
  updatePersons: function (request) {

  },
  deletePersons: function (request) {

  }

}