const array1 = [1,2,3];
const array2 = [4,5,6];

const combineArray = [...array1, 69, ...array2];
console.log('combineArray', combineArray);

//-------------------
const username = {firstName : 'Donut'};
const location2 = {city : 'Z'};

const userInfo = {...username, ...location2, ...array1};
console.log('userInfo', userInfo);
