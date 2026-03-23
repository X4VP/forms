const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('User List');
});

router.get('/new', (req, res)=>{ // /users/new
    res.send('User New Form');
});
router.get('/:id', (req, res)=>{
    res.send(`Getting User Data: ${req.params.id}`);
});

router.route('/:id').get((req, res)=>{
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req, res)=>{
    res.send(`Deleting User Data: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating User Data: ${req.params.id}`);
});

const users = [{firstName:"Xavier"}, {firstName:"Goomaral"}];
router.param('id', (req, res, next, id)=>{
module.exports = router;