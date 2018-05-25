const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }


     // Regular
console.log('Deez Nuts')
// Interpolated
console.log('Hello i am a %s Sean', 'Good')
// console.log(`Hello i am a ${var} Sean`) USE INSTEAD EASTIER
// Styled
console.log('I am %cgood text', 'font-size: 19px; color: red')

// warning!
console.warn('BE CAREFUL Sean')
// Error :|
console.error("OH SHIT Sean")
// Info
console.info('Fear is the mind killer')
// Testing
console.assert(1 === 'one', 'That is wrong!') // if false returns text
    // clearing
// console.clear()
    // Viewing DOM Elements
const para = document.querySelector('p');
console.log(para)
console.dir(para)
    // Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`)
});

    // counting
console.count('Sean')
    // timing
console.time('Running Algorithmically...');
fetch('https://www.johnstonesupply.com/storefront/index.ep')
    .then(data => data.json())
    .then(data =>{
     console.timeEnd('Calculating...');
     console.log(data)
    });

    console.table(dogs)