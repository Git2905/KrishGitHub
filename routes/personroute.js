const express=require("express"); 
const router=express.Router();
const personController=require('../cotrollers/personcontroller');

router.post('/createperson',personController.createPersons)
router.get('/getallpersons',personController.getAllPersons)

module.exports=router;



 