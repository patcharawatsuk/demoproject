function calculate(x ,y, callback) {
    setTimeout(() => {
        const sum = x+y;
        callback(sum);
    }, 50);
}

function display(result) {
    console.log(result);
}

const fn = function(result) {
    console.log(result);
}
const fn1 = result => console.log(result);
//calculate(100, 50, display); 

//callback hell
calculate(100, 50, result => {
    console.log(result);
    calculate(200, 50, result => {
        console.log(result);
        calculate(500, 500, result => {
            console.log(result);
        });
    });
});
