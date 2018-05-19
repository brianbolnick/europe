const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const config = require('../../config');
const Todo = require('../models/Todo');
const db_url = process.env.MONGODB_URI || config.dbUri
mongoose.connect(db_url);

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

router.get('/test', function (req, res) {
    res.json({ message: 'It works!' });
});

router.route('/todos')
    //get all todos
    .get(function (req, res) {
        Todo.find(function (err, todos) {
            if (err)
                res.send(err);
            res.json(todos)
        });
    })

    //post new todo to the database
    .post(function (req, res) { 
        req.body = JSON.parse(Object.keys(req.body)[0]);
        const todo = new Todo();
        const todo_id = todo._id;

        todo.description = req.body.description;
        todo.status = 'active';
        todo.save(function (err) {
            if (err) { res.send(err) };
            res.json(todo);
        });
    });

router.put('/todos/:todo', function (req, res, next) {
    req.body = JSON.parse(Object.keys(req.body)[0]);
    var todo_id = req.params.todo;    
    Todo.findById(todo_id, function (err, todo) {
        if (err) { res.send(err); }
        todo.status = todo.status === 'active' ? 'completed' : 'active';
        todo.save(function (err) {
            if (err) { res.send(err); }
            res.json(todo);
        });
    });
})


module.exports = router;





