const numbers = [1,2,3,5];

let rta = false;
for (let index = 0; index < numbers.length; index++ ){
    const element = numbers[index];
    if (element % 2 === 0 ){
        rta = true; 
        break
    }
} 

console.log(rta); 





const rta2 = numbers.some(item => item % 2 ===0);

console.log(rta2,'rta3'); 



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



    const rta3 = orders.some(item => item.delivered);

    console.log(rta3,'rta2'); 





const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "work",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "meeting with boss",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "dinner",
    },
  ];


  const newAppointment = {
      startDate: new Date(2021, 1, 1, 8),
      endDate: new Date(2021, 1, 9, 30), 
  }


  var getOverlappingDaysInIntervals = require('date-fns/getOverlappingDaysInIntervals')


const isOverlap = (newDate) => {
    return dates.some(date => {
        return getOverlappingDaysInIntervals(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: date.endDate},
            
        )
    })
 
}

console.log(isOverlap(newAppointment),"overlap");


