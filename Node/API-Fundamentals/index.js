const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer((req, res) => {
  // console.log(req)
  // console.log(req.url)
  // console.log(req.method)


  //Fetch all the students data --> GET /students

  // if(req.url === "/students" && req.method ==="GET"){
  //   // res.end("Getting Students data")

  //   fs.readFile("./students.json","utf-8", (err, data)=>{
  //     if (err === null){
  //       res.end(data);
  //     }
  //     else{
  //       res.end("Error fetching user data")
  //     }
  //   })
  // }

  //reading the file , it reads everything as a text and its a string

  //ser fetch single student based on id --> GET /students?id=2
  // How to mention id =2 ??
  //In node js there is one inbuild module which helps us to extract data from the URL's --> url module

  // console.log(url.parse(req.url,true));

  // res.end("Parse data")

  let parseUrl = url.parse(req.url, true);
  // console.log(parseUrl);
  console.log(parseUrl.query.id);


  let students = fs.readFileSync("./students.json", "utf-8");

  if (parseUrl.pathname === "/students" && parseUrl.query.id === undefined && req.method === "GET") {
    res.end(students)
  }
  else if (parseUrl.pathname === "/students" && parseUrl.query.id != undefined && req.method === "GET") {

    // res.end("Single student data");

    let studentsArray = JSON.parse(students);
    let student = studentsArray.find((student) => {
      return student.id == parseUrl.query.id;
    })
    if (student != undefined) {
      res.end(JSON.stringify(student));
    }

    else {
      res.end(JSON.stringify({ message: "Student not found" }));
    }

  }



    // console.log(student);

    // res.end("Single student data");







    // res.end("This is our first response");








  }).listen(8000)

