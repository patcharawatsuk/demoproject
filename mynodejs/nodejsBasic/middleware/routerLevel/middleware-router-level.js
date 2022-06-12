const express = require('express')  // ใช้งาน module express
const app = express()  // สร้างตัวแปร app เป็น instance ของ express
const port = 3000  // port 
const birds = require('./bird') // ใช้งาน router module
 
// เรีรยกใช้งานในรูปแบบ middlewar โดยใช้ use
app.use('/birds', birds)
 
// ส่งกลับข้อความ "hello world" เมื่อมี GET request มายังหน้า homepage
app.get('/', function (req, res) {
    res.send('hello world ')
})
 
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})