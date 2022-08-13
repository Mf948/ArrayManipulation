const elements = ['fire','air','water']; 


let rtaFinal = '';
const seprator = '--';

for (let index = 0; index < elements.length; index++){
    const element = elements[index];
    rtaFinal = rtaFinal + element + seprator;

}

console.log('for', rtaFinal);

const rta = elements.join('--');
console.log('join',rta);



const title = 'Arrays Manipulation course';


const urlArray = title.split(' ').join('-').toLowerCase();
console.log(urlArray);





