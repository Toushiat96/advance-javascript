const numbers =[3,4,5,6,7];
// const output =[];

// for(let i=0;i<numbers.length;i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// numbers.map(function(element,index){
//     console.log(element,index);
// })

// const result = numbers.map(function(element){
//     return element * element;
// })

const result = numbers.map(X => X * X);
console.log(result);