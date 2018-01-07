const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

const port=process.env.PORT || 3000;
var app=express();


hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
	var now=new Date().toString();
	var log='${now}: ${req.method} ${req.url}';

	console.log(log);
	fs.appendFile('server.log',log,(error)=>{
		console.log('error occurred');
	});
	next();
})

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res) {
	// res.send('<h1>hello rathore</h1>');
	// res.send({
	// 	name:'abhishek',
	// 	age:12,
	// 	likes:['movie','tech','horsing']
	// });

	res.render('home.hbs',{
		welcome:'welcome to the site of abhishek rathore',
		title:'home page',
		date:new Date().getFullYear()
	});
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		title:'about page',
		date:new Date().getFullYear()
	});
});



app.get('/bad',(req,res)=>{
	res.send({
		error:'error occurred'
	});
})

app.listen(port,()=>{
	console.log('server is up on port ${port}');
});