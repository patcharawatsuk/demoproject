// const express = require('express');
// const app = express();
// // mddleware ฟังก์ชั่น 1
// function logOriginalUrl (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
// } 
 
//  // mddleware ฟังก์ชั่น 2
// function logMethod(req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
// }
 
//  // นำ mddleware ฟังก์ชั่น ทั้ง สอง มาเก็บไว้ใน array แล้วเรียกใช้งาน
//  // โดยฟังก์ชั่น จะไล่ทำงานตำลำดับก่อนหลัง ของการกำหนดใน array
// var logStuff = [logOriginalUrl, logMethod]
// app.get('/user/:id', logStuff, function (req, res, next) {
//     console.log('last middleware');
//     res.send('User Info')
// })

// app.listen(3000, () => {
//     console.log('run app at port 3000!');
// })


const express = require('express')  // ใช้งาน module express
const app = express()  // สร้างตัวแปร app เป็น instance ของ express
const port = 3000  // port 
const myLogger = require('./my-logger')
  
app.use(myLogger({message:"LOGGED MESSAGE"}))
 
app.get('/', function (req, res) {
    res.send('Hello World!')
})
  
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})