// callback

function doSomething(name){
  // console.log(name);   //name is holding a function
  demo();
  console.log("I am do something")
}
// doSomething("Pannu");

doSomething(demo);

// callback

function doSomethings(person){
  console.log(person)
}
doSomethings({name:"Pavani", age: 20});

// we can also pass a function

function demo(){
  console.log("I am demo");
}


//rather than create a separate demo function, we have to create a same in argument

function ab(n){
  console.log("I am ab function")
  n();
}

ab(function(){    //anynomous functions
  console.log("I am ab Arg")
})

//The fun that you pass as argument to other function is called as a callback function.
// Because we are giving the control of calling that function to other function, means that function can do its task first then it can call function that you give as an argument.
// need of callback is ,a lot of times , we have some function and perform a task, and gives some data or wants to notify that task is done 


function getUserData(task){  // this function is only responsible for getting user data, and i can use wherever i want
  let data = [1,2,3,4,5];
  task(data);

}

getUserData(function(userdata){
  console.log(userdata);
})


getUserData(function(userdata){
  //excel
  //dom manip
  //json file
  //sending to social media, 
  //This function will be called anywhere..!

})


//============Asynchronous in JavaScript==================
//Multiple things at the same time
// Js is a single thread JS(one task at a time in sequence)
//Execute 1 task at a time.
//waited is need for the next task if the previous task has more time consuming
// to overcome this in other languages there is one concept is multithreading
//but in js there is no done with Multi thread , we use Asynchronous
//the browser provides provides some web api's

console.log("Line 1");
console.log("Line 2");

setTimeout(function(){   //It is not my call checks job, the web browser will handle 
for (let i =1; i<=10; i++){
  console.log(i);
}

},2000)


console.log("Line 5")

//Event loop it is nthing but a functionality which continuously checks the callback queue

//Examples-- 
//1. calling internet (server might be busy)
//2 .Reading a big file of data



function getUsersFromFacebook(){
  console.log("Users priniting line 1")
  //some code
  //call server
  //prepare data
  let users = [{name : "Pavani"},{name:"Pannu"}]
  // console.log(users)
  return users;
}
console.log("Some code");

setTimeout(function(){
  let users =getUsersFromFacebook();

  setTimeout(function(){
    let posts =getPostFromUser(users[1]);


  },0)
},0);


console.log("Another code")

function getPostFromUser(user){
  //call the api
  //pass the user for getting post

  let post = [{title:"holiday"},{title:"Workingday"}]

}


//to make depend of each other, we dont return each other, we have to pass them as an argument like a function..!


