const letters = ['a','b','c']

// const NewArray = [];

// for(let index=0; index<letters.length; index++){
//     const element = letters[index];
//     NewArray.push(element + '++')
// }

const newArray = letters.map(item => item + '++');


console.log('new',newArray);

