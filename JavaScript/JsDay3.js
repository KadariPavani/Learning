console.log("Hello world!")

//70% of the things are basically depends on callback functions
//The function that we can pass as an argument to some other function then it is called as callback()

function myfun(name) {
  console.log("My function");
  name();
}
myfun(function () {
  console.log("My second funtion");
})

//Using return
function Fun(pannu) {
  console.log("Hello", pannu());
}
Fun(function () {
  return "My name is Pavani";
})

//Another ex

function doSomething(doAnotherthing) {
  console.log("Hello");
  doAnotherthing(111);
}

doSomething(function (a) {    //function without a name is called anonymous functions
  console.log("Namaste", a);
})



//------In 2015, es6 version of JavaScript came at that time one more way of ceating a function is called ARROW FUNCTION


//Arrow function
//1. Ignore function keyword
//2. now add = before and after => the paenthesis


//Normal
add = () => {
  console.log(2 + 3);
}

add();

//Passing params
add = (a, b) => {
  console.log(a + b);
}

add(20, 30);

//single line code , no need to put curly braces
add = () => console.log("Hello");
add();

//return --method1
add = (a, b) => {
  return a + b;
}
//return --method2
add = (a, b) => a + b;

let c = add(25, 75);
console.log(c);

//example of dosomething in arrow function

doSomething = (names) => {
  console.log("Hello");
  names();
}

doSomething(() => {
  console.log("Hai")
})

//map, filter, find,reduce and foreach function

// ALl of these are array functions

let nums = [12, 24, 46, 45, 23]

let student = [
  {
    id: 1,
    name: "abc",
    age: 3
  },
  {
    id: 1,
    name: "def",
    age: 6
  },
  {
    id: 1,
    name: "ghi",
    age: 9
  }
]

console.log("============FOR EACH=================");
//foreach : It is a basically a replacemnent of basic forloop, It is smpley used to loop throuhout the array
//here a parameter is mandatory no need for 3
// nums.forEach(function(element, index, arr){

nums.forEach((element, index, arr) => {

  console.log(element, index, arr);
  // console.log(element);
})

//simple approach
nums.forEach((e, i, a) => console.log(e, i, a));
nums.forEach((e, i, a) => console.log(i));


student.forEach((element, index, array) => {
  console.log(JSON.stringify(element))
  // console.log(element.name)
})



//map function
//the main difference between foreach and map is foreach doesnot return anything but the map do, 
// Actual usage of map is if we have 1000 of elements we have to extract all the student names, then we go to the map
console.log("==============MAP==============")

let ab = nums.map((e, i, a) => {
  console.log(e, i, a);
  return e;   //we can return whatever we want
})

console.log(ab);


let abc = student.map((element, index, arr) => {
  console.log(element.name);
  return element.name;
})

console.log(abc)

//return only some properties
let names = student.map((st) => {
  return { name: st.name, age: st.age };
})

console.log(names);

console.log("=============FILTER============")
//filter is also a looping method but we can't use for looping, the name says it is used for filteration..!
//It is alos return an array
//we write return with condition, not for modified the array, it just for filtering the array to access the elements cnditionlally

let fil = nums.filter((element, index, array) => {
  return element % 2 == 0;
})
console.log(fil)

// simple for loop
for(let i=0;i<nums.length;i++){
  if (nums[i]%2==0){
    console.log(nums[i])
  }
}


//Example for students whose marks are greater than 50;

let studs =[
  {
    name: "Rama",
    branch : "AID",
    marks:100
  },
  {
    name:"Sita",
    branch : "AID",
    marks: 90
  },
  {
    name :"Lakshmana",
    branch: "AID",
    marks : 40
  },
  {
    name: "Hanuma",
    branch : "AID",
    marks :80
  },
  {
    name :"Bharatha",
    branch : "AID",
    marks : 20
}
]


let best = studs.filter((n,i,a)=>{
  return n.marks >50;
});
console.log(JSON.stringify(best));


//Example for attempts
// let attempts =3
// do{
//   let password =prompt("Enter Password..:"+attempts+"attempts are left")
//   if(password ==="1234"){
//     console.log("Welcome!");
//     break;
//   }
//   else{
//     attempts --;
//   }
// }while(attempts>0)


// find
// It is like a searching and only find one occurance at one occurance

let news= studs.find((n)=>{
  return n.marks >50;
})
console.log(news);

<<<<<<< HEAD
=======

>>>>>>> master
//==========destructuring==================
// It helps to copy the data in a really efficient manner..!
//Even if there are manyh properties, we can extract whatever we want..!
// The only thing is the property name and the variable names should be equal..!
//We never destructure array only we have to destructure the object
let obj ={
  name : "Pannu",
  age : 20
}

let {name,age}=obj; //All the properties inside the objects which match the names in these will be copied
console.log(name, age);

// let name =obj.name;
// let age = obj.age;


//=============spread operator(array destructuring)===========
// The benifit of spread operator is when we have to merge 2 arrays/ copying and merge the arrays
let n =[1,2,3,4,5]
let m =[6,7,8,9,10]
console.log(...n, ...m);  //converts the array  values to open ones means free flowing
let a =[...n, ...m];
console.log(a);


let s =n //shallow copy --> copy  the address, so that it will effect the copied one too 
//It is stored in heap , inside n address of the memory location is stored..!
n[1]=20;   
console.log(s,n)

let p=[...n]   //value copy --> so that never effects the copied ones
n[2]=30;
console.log(p,n);



// Rest parameter

function doSomethinga(...a){
  console.log(...a);
  console.log(a);
}

doSomethinga(2,5,4,5,6,6,6,6,55,5)

//rest parameter should be the last parameter only , not the 1st and middle
function doSomethingb(a, ...b){
  console.log(a,b);
  console.log(a, ...b);
}

doSomethingb(1,2,3,4,5);