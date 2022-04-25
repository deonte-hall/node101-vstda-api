const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

let mockData = [
	{
		"todoItemId": 0,
		"name": "an item",
		"priority": 3,
		"completed": false
	},
	{
		"todoItemId": 1,
		"name": "another item",
		"priority": 2,
		"completed": false
	},
	{
		"todoItemId": 2,
		"name": "a done item",
		"priority": 1,
		"completed": true
	}
];

app.get('/', (req, res) => {
	console.log("body", req.body);
    res.send({
        status: 'ok'
    });
	
});

app.get('/api/TodoItems', (req, res) => {

    res.send(mockData);
   
});

app.get('/api/TodoItems/:number', (req, res) =>{
    let index = req.params.number;
	let item;
	for(let i = 0;i < mockData.length; i++){
		if(mockData[i].todoItemId == index){
			item = mockData[i];
		}
	};
	res.status(200).send(item);	
});


app.post('/api/TodoItems/', (req, res)=>{

	for(let i=0; i < mockData;i++){
		if(mockData[i].todoItemId == req.body.todoItemId){
			mockData[i] = req.body;
		}else{
			mockData.push(req.body);
		}
	}
	console.log("request body:" ,req.body);
	res.status(201).send(req.body);
});
app.delete('/api/TodoItems/:number', (req, res)=>{
	let item;
	for(let i=0; i < mockData.length; i++){
		if(mockData[i].todoItemId == req.params.number){
			item = mockData[i];
			mockData.splice(i, 1);
		}
	}
	res.status(200).send(item);

})

app.get('*', (req, res)=>{
    res.status(404);
});





module.exports = app;
