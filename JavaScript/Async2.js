//promises --> some condition that we agreee upon, 
//How it replace the idea of callbacks

//A promise is nothing but a tool which helps us to execute a task(eithe it may be sync or async) then it tells us task is successful or unsuccessful...
// It is a object which always has executor function--> It is return only 2 things => resolve/reject if not both it will waiting

//creating a promise
//Promosis are not async bydefault --> it execute line by line
//To make async we use the keyword async instead of making the code in setTimeOut


async function getUsersFromFacebook() {

  const prom = new Promise(function (resolve, reject) {
    //call server
    //prepare data
    let users = [{ name: "Pavani" }, { name: "Pannu" }]
    if (users.length > 0) {
      resolve(users);
    }
    else {
      reject("No users found");
    }



  })
  return prom;
}

async function getPostsFromUser(user) {
  const prom = new Promise(function (resolve, reject) {
    let posts = [{ title: "Post1" }, { title: "Post2" }];
    if (posts.length > 0) {
      resolve(posts);
    }
    else {
      reject("No posts found");
    }
  })

  return prom
}


getUsersFromFacebook()
  .then(function (users) {
    console.log(users);
    return getPostsFromUser(users[0])
    // .then(function (posts) {
    //   console.log(posts);
    // })
    // .catch(function (err) {
    //   console.log(err);
    // })

  })
  .then(function (posts) {
    console.log(posts);
  })
  .catch(function (err) {
    console.log(err);
  })



async function doSomething() {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve("Success");
    }
    else {
      reject("Failure");
    }
  })
}


doSomething()
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  })



//Example for async using Loop

console.log("Line1");

async function bigTask() {
  return new Promise(function (resolve, reject) {   //only writing promise doesnot make it async, promise is a way to handle async tasks
    let count = 0;
    for (let i = 0; i < 100; i++) {
      count++;
    }
    resolve(count);
  })
}

// bigTask()
// .then(function(count){
//   console.log(count);
// })

console.log(bigTask());   //promise have 3 states --> pending, fulfilled, rejected


//.then() --> to handle fulfilled state
// .catch() --> to handle rejected state
console.log("Line2");




// We dont have to create promises in most of the times, there are alot of things to do time based tasks
// like
// 1. calling an api, 2. reading a file 
// so there have bydefault madede async and by default return promises


//calling api
//this func is by default async
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // console.log(response);
    // to extract the data from the readable stream we use,
    response.json().then((data) => {
      console.log(data);

    })
      .catch((err) => {
        console.log(err);
      })
  })
  .catch((err) => {
    console.log(err)
  })



// or using the single then and catch for inner processing we write the code as

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // console.log(response)
    return response.json();

  })
  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log(err)
  })


//another way handle promises
//await =wait ,
//1. if the await line is completed succcessfuly then go to next line, so these are woking in the synchronous manner,but not block the mainthread, it just wait the task is being completed and go to the next line 
// 2. Await resolves




async function handleFetch() {
  // await fetch("https://jsonplaceholder.typicode.com/posts")
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  let data = await response.json();
  console.log(response)
  console.log(data)
}
handleFetch();


//as the await is only handinling in the data of .then(), for the errors we use try and catch method

async function handleFetch() {

  try {
    // await fetch("https://jsonplaceholder.typicode.com/posts")
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json();
    console.log(response)
    console.log(data)
  }
  catch (err) {
    console.log(err);
  }
}
handleFetch();

