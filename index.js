
const express=require("express");
const app=express();
const routes=require('./routes/personroute'); 
const bodyParser=require("body-parser");
const port=8080;

app.use(bodyParser.json());
app.use('/api',routes);

app.listen(port,()=>
{
  console.log("App is listening at port  :",port);
});

