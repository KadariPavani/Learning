console.log("Hello Node");

let data = [1,2,3,4,5]
console.log(data[3])

data.forEach((element, index, arr)=>{
  console.log(element)
})


let stud =[{
  name: "Pannu",
  age :20
},
{
  name:"Pavani",
  age :20
}
]

console.log(stud)
console.log(JSON.stringify(stud))