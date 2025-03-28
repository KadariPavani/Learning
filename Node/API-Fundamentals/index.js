// Any server that is running locally in our computer that is called as local server and the address is fixed
// 127.0.0.1 / localhost (domain name)
// To identify which server like frontend, backend, db we can identify through port number..!
// port number --> Unique id of the server
// In node js there is by default inbuild module to create server/ API endpoint by using the functions provided by the module.
// the module name is http

const http = require('http');



// create a server
//127.0.0.1:8000


http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    // console.log(req.method);
    
    // if (req.url == "/add") {
    //   res.end("Added data")
    // }
    // else if(req.url =="/update"){
    //   res.end("Updated data")
    // }

    if(req.url =='/pannu' && req.method=="GET"){
      res.end("pannu via good");
    }

    else if(req.url =='/pannu' && req.method =="POST"){
      res.end("Pannu via post");
    }
    else if(req.url =="/users" && req.method =="POST"){
      res.end("Created User")
    }



    // res.end("Hello..! This is first response");


  })
  .listen(8000)

//the browser by default seding a get request.
//To test API (We have to create full fleged frontend api or use API testing tool)

