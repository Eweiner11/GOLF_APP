const express = require('express');
const bodyParser = require('body-parser');



let app = express();


app.use(bodyParser.json())
app.use(express.static('./client/dist'))



let port = 3000;

app.listen(port, (err)=>{
if(err){
    console.log(err);
}else{
    console.log(`listening on port: ${port}`)
}
})