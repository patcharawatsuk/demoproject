
const fs = require('fs');

const {getCurrentTime, add} = require('./mymodule');
console.log(getCurrentTime(), add(5,4));

//read file
// const data = fs.readFileSync('./myfile/input.txt', 'utf-8');
// console.log(data);
// console.log('จบการทำงาน');

// const outputText = `Hello Node.js \n${data}\n ไฟล์ถูกเขียนเมื่อ ${new Date()}\n`;
// fs.appendFileSync('myfile/output.txt', outputText);
// console.log('เขียนไฟล์เรียบร้อย');

//read file async

// const dataAsync = fs.readFile('./myfile/input.txt', 'utf-8', (err, data) => {
//     if(err) {
//         return `error occor : ${err})`;
//     }
//     return data;
// })

function readfileAsync () {
    return new Promise((resolve, reject) => {
        console.log(`reading is being proceed.`);
        fs.readFile('./myfile/input.txt', 'utf-8', (err, data) => {
            if(err) {
                reject(`read file -> error occor : ${err}`);
            } else {
                //resolve(data);
                const writedata = `write async data\n ${data} \n ${new Date()}\n`
                fs.writeFile('./myfile/output2.txt', writedata, (err) => {
                    if(err) reject(`write file -> error occor : ${err}`);
                    resolve(writedata);
                })
            }
        })
    })
}

start = async () => {
    console.log(`สวัสดีเริ่มต้นโปรแกรม\n`);
    console.log(await readfileAsync(), '\n');
    console.log(`สวัสดีสิ้นสุดโปรแกรม`);
}

start();
