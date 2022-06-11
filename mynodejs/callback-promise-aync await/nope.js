function calculate(x ,y) {
    setTimeout(() => {
        return x+y;
    }, 2000);
}

function display(result) {
    console.log(result);
}

const a = calculate(100, 50);
display(a);