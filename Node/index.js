//importing File System Module
const fs =require('fs')  

//reading a file in a sync way

console.log("-------Reading file in Sync-------------")
let data =fs.readFileSync('./test.txt','utf-8' );  
console.log(data);
console.log("Hello");

//reading a file in async way
console.log("-------Reading file in Async-------------")
fs.readFile('./test.txt', 'utf-8', (err, data)=>{
  console.log(err);
  console.log(data);

})
console.log("Test code")

// writing the file in sync way
console.log("------Writing file in Sync------");
fs.writeFileSync("./pannu.txt", "Intelligent girl")
console.log("Writing file successfully..!")

// writing the file in Async way
console.log("------Writing file in Async------");
fs.writeFile("./pannu.txt","Topper", (err)=>{
    console.log(err)
    console.log("Writing file successfully..!")

})

fs.readFile("./pannu.txt",'utf-8', (data, err)=>{
  console.log(data)
  console.log(err)
} )

// writing file will always overwrite the existing data, to keep the existing data, we use append

fs.appendFile('./pannu.txt','\nGood Girl', (err)=>{
  console.log(err);
  console.log("File append Successfully")
})

// delete a file
// fs.unlinkSync('./pannu.txt')

//OS MODULE
const os = require('os');

console.log(os.platform());
console.log(os.hostname());
console.log(os.freemem());
console.log(os.homedir());

