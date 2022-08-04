const orders =[
{
    costumerName: 'Nicolas',
    total: 60,
    delivered: true,
},{
    costumerName: 'Zulema',
    total: 120,
    delivered: false,
},{
    costumerName: 'santiago',
    total: 180,
    delivered: true,
},{
    costumerName: 'valentina',
    total: 240,
    delivered: true,
},

];
// console.log("original",orders);

// const rta = orders.map(item => item.total );// transform only total array

// console.log('rta',rta);

// const rta2 = orders.map(item => {
//     item.tax = .19; /// added new atrribute tax: 0.19
//     return item// changes the satate of the object in the memory.. 
// })

// console.log('rta2',rta2);




const rta3 = orders.map(item => {
    return {/// prevent error in memory refrence
        ...item, // new object and 
        tax: 19 //new reference in memory added to the new object
    };
});

console.log('rta3',rta3); 

console.log("original",orders);