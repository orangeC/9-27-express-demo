var express = require("express");
var app = express();

app.get ( "/",function (req,res){
	res.send("hello cheng!")
	console.log("hello cheng")
})

app.get ( "/abc",function (req,res){
	res.send("hehe cheng!")
	console.log("hehe cheng")
})

app.listen(3000,function(){
	console.log("running on port 3000...")
})