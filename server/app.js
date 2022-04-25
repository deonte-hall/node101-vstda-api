const express = require('express');
const morgan = require('morgan');

const app = express();

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
]
// add your code here
app.get('/', (req, res) => {

    res.send({
        status: 'ok'
    });
});

app.get('/api/TodoItems', (req, res) => {

    res.send(mockData);
});

app.get('/api/TodoItems/:number')

app.get('*', (req, res)=>{
    res.sendStatus(404);
})





module.exports = app;
