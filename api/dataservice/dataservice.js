let mysql = require('mysql');

function StoreComment(aResFunction, pUser, pComment){
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'max',
    password: '6543',
    database: 'max'
  });

  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  let sql = `Call StoreComment(?,?)`;
  console.log([pUser,pComment]);
  connection.query(sql, [pUser,pComment], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
    aResFunction(JSON.stringify(results[0]));
  });
  connection.end();
}

function CheckPassword(aResFunction, pEmail, pPassword){
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'max',
    password: '6543',
    database: 'max'
  });

  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  let sql = `Call CheckPassword(?,?)`;
  console.log([pEmail,pPassword]);
  connection.query(sql, [pEmail,pPassword], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
    aResFunction(JSON.stringify(results[0]));
  });
  connection.end();
}

function CheckEmail(aResFunction, pEmail){
  let connection = mysql.createConnection({
      host: 'localhost',
      user: 'max',
      password: '6543',
      database: 'max'
  });

  connection.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      }
    
      console.log('Connected to the MySQL server.');
    });

    let sql = `CALL CheckEmail(?)`;
    console.log([pEmail]);
    connection.query(sql, [pEmail], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results[0]);
      aResFunction(JSON.stringify(results[0]));
    });
    connection.end();
}

function CheckUserType(aResFunction, pEmail){
  let connection = mysql.createConnection({
      host: 'localhost',
      user: 'max',
      password: '6543',
      database: 'max'
  });

  connection.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      }
    
      console.log('Connected to the MySQL server.');
    });

    let sql = `CALL CheckUserType(?)`;
    connection.query(sql, [pEmail], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results[0]);
      aResFunction(JSON.stringify(results[0]));
    });
    connection.end();
}

function GetUsers(aResFunction){
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'max',
        password: '6543',
        database: 'max'
    });

    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
      });

      let sql = `CALL GetUsers()`;
      connection.query(sql, true, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
        aResFunction(JSON.stringify(results[0]));
      });
      connection.end();
}

function RegisterUser(aResFunction, pFirstName, pLastName, pEmail, pPassword, pType, pGender, pCollege, pYear){
  let connection = mysql.createConnection({
      host: 'localhost',
      user: 'max',
      password: '6543',
      database: 'max'
  });

  connection.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      }
    
      console.log('Connected to the MySQL server.');
    });

    let sql = `CALL RegisterUser(?,?,?,?,?,?,?,?)`;
    connection.query(sql, [pFirstName, pLastName, pEmail, pPassword, pType, pGender, pCollege, pYear], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results[0]);
      aResFunction(JSON.stringify(results[0]));
    });
    connection.end();
}


exports.GetUsers = GetUsers;
exports.CheckPassword = CheckPassword; 
exports.CheckEmail = CheckEmail;
exports.StoreComment = StoreComment; 
exports.CheckUserType = CheckUserType;
exports.RegisterUser = RegisterUser;

 