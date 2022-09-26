//jshint esversion:6

/* require and set up express */
const express = require('express');
const app = express();

/* create a get route */
app.get("/", function(req, res){
res.send("Hello World");
});

/* create a listen method for root port 3000 */
app.listen(3000, function(){
    console.log("server has started");
})
