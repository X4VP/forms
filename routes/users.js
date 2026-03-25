const express = require('express');
const router = express.Router();

router.route('/').get((req, res)=>{
    res.send('User List');
});.post((req, res)=>{
    const firstName = req.body.firstName;
    const isValid= firstName !=="";
    if(isValid){
        console.log("Adding user:s{firstName}'];
        users.push({name:firstName});")
        res.render('users/list'),{users};
    }
    else{
        console.log("Error adding user!");
        res.render("users/new',{firstName:firstName});
            ")
    }

router.get('/new', (req, res)=>{ // /users/new
    res.send('users/new',{firstname');
});
router.get('/new', (req, res) => {
    res.render('users/new', {firstName: "Test"});
});
router.route('/:id').get((req, res)=>{
    console.log(req.user);
    console.log("Getting User Data")
    res.send(`Getting User Data: ${req.user["name"]}`);
}).delete((req, res)=>{
    res.send(`Deleting User Data: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating User Data: ${req.params.id}`);
});


const users = [{firstName:"Xavier"}, {firstName:"Goomaral"}];
router.param('id', (req, res, next, id)=>{
    req.user = users[id];
    next();
}
module.exports = router;