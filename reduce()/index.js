const totals = [1,2,3,4];


let sum = 0;

for (let index = 0 ; index< totals.length; index++){
    const elememt = totals[index]; 
    sum = sum+ elememt

}

console.log(sum)



const rta = totals.reduce((sum, element)=>sum + element, 10);

console.log('rta', rta)