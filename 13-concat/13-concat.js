const elements = [1,1,2,2];

const otherElememts = [3,3,4,4];

const newArray = [... elements];
for (let index = 0; index < otherElememts.length; index++) {
    const element = otherElememts[index];
    newArray.push(element);

}
console.log('for', newArray);

const rta= elements.concat(otherElememts);
const rta2 = [...elements, ...otherElememts];
const rta3 = [...elements, ...'random'];
console.log('concat',rta)
console.log('...',rta2)
console.log('rta3',rta3)


const elements = [1,1,2,2];

const otherElememts = [3,3,4,4];

elements.push(...otherElememts)
console.log( 'elemnts',elements)



