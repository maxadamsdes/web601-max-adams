var express = require('express');
var router = express.Router();
var {CheckUserType} = require('../dataservice/dataservice');

router.post('/', (req, res) => {
    // handle the request
    user =  req.body;
    console.log("post hello " + JSON.stringify(user));
    //res.json({ id: 1, name: "Catcher in the Rye" });
    CheckUserType( (jsnText) =>{
        res.json(jsnText);
      }, 
      user.email);
    //res.json( JSON.stringify({ id: 1, name: "Catcher in the Rye" }));
 })

  router.get('/', (req, res) => {
    // handle the request
    user =  req.body;
    console.log("get hello" + user);
    res.json( JSON.stringify({ id: 1, email: "Catcher in the Rye" }));
  })


  module.exports = router;
