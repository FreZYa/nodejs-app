// const path = require("path");

// let result = path.resolve("app.js");

// result = path.extname("app.js");
// result = path.parse(__filename)
// console.log(result)

/////////////////////////////////////////////////

// const url = require("url");

// const address = "http://sadikturan.com/kurslar?year=2019&month=nisan";

// let result = url.parse(address, true);

// console.log("result", result);
// console.log("result", result.path);
// console.log("result", result.query.year);


/////////////////////////////////////////////////


const fs = require("fs")

// const files = fs.readdir("./", function(error, data){
//     if (error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })


// const data = fs.readFile("index.html", "utf8", function(error, data){
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });

// fs.writeFile("deneme1.txt", "Hello World...", function(error){
//   if(error){
//     console.log(error);
//   }else{
//     console.log("dosya oluşturuldu");
//   }
// })

// fs.appendFile("deneme.txt", "Hello World...", function(error){
//     if(error){
//       console.log(error);
//     }else{
//       console.log("dosya oluşturuldu");
//     }
//   })

// fs.unlink("deneme1.txt", function(error) {
//     console.log("dosya silindi")
// })

// fs.rename("deneme.txt", "deneme1.txt", function(error){
//     console.log("dosya ismi değiştirildi.")
// })