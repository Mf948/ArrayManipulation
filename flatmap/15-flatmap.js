const users = [
    { userId: 1, username: 'Tom', attributes: ['nice', 'cute']},
    { userId: 2, username: 'Mike', attributes: ['Lovely']},
    { userId: 3, username: 'Nico', attributes: ['nice', 'cool']},

];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);

console.log(rta,'rta');
console.log(rta2,'rta2');


const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const rta44 = Object.values(calendars).flatMap(item => {
    console.log('item', item);
    return item.map(date => date.startDate);
  });

  console.log(rta44,'rta')