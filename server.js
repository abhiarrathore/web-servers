const express=require('express');
const hbs=require('hbs');
const app=express();

var port=process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('year',()=>{
	return new Date().getFullYear()
});

app.set('view engine','hbs');


app.use((req,res,next)=>{
	var log='method: '+req.method+'  url:  '+req.url;
	console.log(log);
	next();

});

app.get('/',(req,res)=>{
	res.render('homeNew.hbs',{
		pageTitle:'HOME PAGE',
		body:"this is the home page of abhishek rathore's second hbs project. wish to succeed"
	});

});

app.get('/about',(req,res)=>{
	res.render('homeNew.hbs',{
		pageTitle:'ABOUT PAGE',
		body:"this is the about page of abhishek rathore's second hbs project. wish to succeed"
	});
});

app.get('/projects',(req,res)=>{
		res.render('homeNew.hbs',{
			pageTitle:'my portfolio',
			body:'here is all my projects and portfolio'
		})

});

app.use(express.static(__dirname+'/public'));

app.listen(port,()=>{
	console.log('server is up on port 3000');
});