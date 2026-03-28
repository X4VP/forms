const express = require('express');
const router = express.Router();

router.route('/').get((req, res)=>{
    res.render('users/list', {users: users});
}).post((req, res)=>{                    //data we want to get from the form
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const isValid = firstName !== "";
    if(isValid){
        console.log(`Adding user: ${firstName}`);
        users.push({firstName: firstName, lastName: lastName, gender: gender, age: age}); //adds new user to the array
        res.redirect('/users');
    }
    else{
        console.log("Error adding user!");
        res.render('users/new', {firstName: firstName, lastName: lastName, gender: gender, age: age});
    }
});

router.get('/new', (req, res)=>{
    res.render('users/new', {firstName: "", lastName: "", gender: "", age: ""}); //gets name and additional information from the user and sends it to the server to be added to the users array
});

router.route('/:id').get((req, res)=>{
    console.log(req.user);
    console.log("Getting User Data");
    res.render('users/individual', {user: req.user});
}).delete((req, res)=>{
    res.send(`Deleting User Data: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating User Data: ${req.params.id}`);
});

const users = [{firstName:"Xavier", lastName:"Perez", gender:"Male", age:20}, {firstName:"Goomaral", lastName:"Bayaraa", gender:"Female", age:21}];  //creates users and thier information

router.param('id', (req, res, next, id)=>{
    req.user = users[id];
    next();
});

module.exports = router;