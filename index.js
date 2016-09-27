var express = require("express");
var app = express();

app.get ( "/",function (req,res){
	var page = "<html>" + "<body>" + "<h1>index.html</h1>" +"</body>" +"</html>"
	res.send(page)
	console.log("hello cheng")
})

app.get ( "/about",function (req,res){
	var page = "<html>" + "<body>" + "<h1>about.html</h1>" +"</body>" +"</html>"
	res.send(page)
	console.log("hehe cheng")
})

app.listen(3000,function(){
	console.log("running on port 3000...")
})