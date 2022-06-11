//To do: url1 must be downloaded finish then url2
const connect = true;
const url1 = 'donut.com';
const url2 = 'donut2.com';

function downloading(url) {
    return new Promise((resolve, reject) => {
        console.log(`กำลังโหลดจาก ${url}`);
        setTimeout(() => {
            if(connect) {
               resolve(`โหลดจาก ${url} เรียบร้อย`);
            } else {
               reject(`เกิดข้อผิดพลาด`);
            }
        }, 500);
    })  
}

downloading(url1).then(result => {
    console.log(result);
    return downloading(url2);
}).then(result => console.log(result));