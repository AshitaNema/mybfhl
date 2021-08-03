const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let array = [2,5,8,9,1,5];

const sayHi = (req, res) => {
  res.send("Hi!");
};



app.get("/bfhl", question0);

function question0(req, res){

let obj = {}


  let array = [2,5,8,9,1,5];
 let arr = [];
let arr2 = [];

let istrue= true;

  for (let i = 0; i < array.length; i++){
	if(typeof array[i] !== typeof 5){
		istrue=false;
	}

    if (i % 2 === 0){
      arr.push(array[i]);
    }
   else{
	arr2.push(array[i]);
}
  }

  obj["is_success"]=istrue;
  obj["user_id"]="ashita_nema_09082000";
if(istrue===true)
	{ obj["odd"]=arr2;
	obj["even"]=arr;}


   res.send(obj);
}



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});