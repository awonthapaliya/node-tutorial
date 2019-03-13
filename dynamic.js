var express = require('express');

var router = express.Router();


//middleware
router.use(function(req, res, next){

    console.log("A new dynamic request recieved at :: " + Date.now());
    
    next();
 });


 // works in the order written
 router.use(function(req, res, next){

    console.log("Second middlewaare dynamic request recieved at :: " + Date.now());
    
     next();
 });

 

router.get('/:id', function(req, res){
res.send('The id send is '+ req.params.id);
});


router.get('/:name([a-z][A-Z])/:id', function(req, res){
    res.send('The name : '+ req.params.name +' and id: '+ req.params.id);
    });

module.exports = router;