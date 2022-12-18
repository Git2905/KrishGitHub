
const personsService = require('../services/personservice')
module.exports =
{
    createPersons: async (request, response) => {
        try
        {
        let result = await personsService.createPersons(request.body);
        //console.log(result);
        response.status(200).send(result);
        }
        catch(err){
            
            console.log(err);
            response.status(500).send(err);
        }

        /* .then(results => {
             response.status(201).send("Persons created with records :", request.body);
 
         }).catch(err => {
                 response.status(500).send("Error occured during create Person :" ,err);
         })*/
    }

}