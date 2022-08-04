// filter based on a condition umutable creates a new array with elements that satisty the condition

const words = ['spray','limit','elite','exuberant'];

const newArray = [];

for (let index = 0; index < words.length; index++){
    const item = words[index];
    if (item.length >=6){
newArray.push(item);
    }
}
console.log('newArray',newArray);
console.log('oroginal', words);

rta = words.filter(item => item.length >=6)
console.log('rta',rta)
console.log('original', words)

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
    },{
        costumerName: 'nicolas',
        total: 24210,
        delivered: false, 
    }
    
    ];

    // const rta4 = orders.filter(item=> item.delivered && item.total >= 100)
    // console.log(rta4)

    const search = (query) => {
        return orders.filter(item => {
            return item.costumerName.includes(query)
        });
    };

console.log(search('nico'),"nicoles");