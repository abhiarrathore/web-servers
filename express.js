const express=require('express');
const hbs=require('hbs');

var app=express();


hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

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

app.listen(3000,()=>{
	console.log('server is up on port 3000');
});