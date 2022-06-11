const colors = ["red", "green", "blue"];
const items =  colors.map(color => `<li>${color}</li>`);
const items2 = colors.map( (value, index, arr) => `<li>${arr}</li>` )
console.log(items2);