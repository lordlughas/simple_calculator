//jshint esversion:6

/* require and set up express */
const express = require('express');

// require body-parser
const { urlencoded } = require('body-parser');


const app = express();
app.use(urlencoded({extended: true}));

/* create a get route */
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.get("/contact", function(req, res){
    res.send("Contact me Now!");
})
app.get("/about", function(req, res){
    res.sendFile(__dirname + "/about.html")
})

/* create post */
// app.post("/", function(req, res){
//     res.send("Thank You");
// })

app.post("/", function(req, res){
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   sum = num1 + num2;
   res.send("The value of the sum is " + sum);
});







/* create a listen method for root port 3000 */
app.listen(3000, function(){
    console.log("server has started");
})
