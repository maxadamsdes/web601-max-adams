var express = require('express');
var router = express.Router();
var {RegisterUser} = require('../dataservice/dataservice')

router.post('/', (req, res) => {
    // handle the request
    user =  req.body;
    console.log("post hello " + JSON.stringify(user.firstName));
    RegisterUser( (jsnText) =>{
        res.json(jsnText);
      }, 
      user.firstName, user.lastName, user.email, user.password, user.type, user.gender, user.college, user.year);
 })

  router.get('/', (req, res) => {
    // handle the request
    user =  req.body;
    console.log("get hello" + user.name);
    res.json( JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
  })

  module.exports = router;