var express = require('express');
var router = express.Router();
var {CheckEmail} = require('../dataservice/dataservice')

router.post('/', (req, res) => {
    // handle the request
    user =  req.body;
    console.log("post hello " + JSON.stringify(user.firstName));
    CheckEmail( (jsnText) =>{
        res.json(jsnText);
      }, 
      user.firstName);
 })

  router.get('/', (req, res) => {
    // handle the request
    user =  req.body;
    console.log("get hello" + user.name);
    res.json( JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
  })

  module.exports = router;