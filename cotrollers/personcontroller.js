
const { send } = require('process');
const personsService = require('../services/personservice')
module.exports =
{
    createPersons: async (request, response) => {
        try {
            let result = await personsService.createPersons(request.body);
            //console.log(result);
            response.status(200).send(result);
        }
        catch (err) {

            console.log(err);
            response.status(500).send(err);
        }
    },

    getAllPersons: async (request, response) => {
        try 
        {
            let result = await personsService.getAllPersons();
            console.log(result);
            response.status(200).send(result);
        }
        catch (err) 
        {
            console.log(err);
            response.status(500).send(err);
        }
    }

}