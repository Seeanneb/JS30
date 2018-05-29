console.log('im quite confident in my speed ya no')

const pressed = [];
const secretCode = 'deeznuts'
window.addEventListener('keyup', (e) => {
    console.log(`event = ${e.key}`)
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').toLocaleLowerCase().includes(secretCode)){
        console.log(`OOH YUM YOU DID IT!`)
        cornify_add();
    }
    console.log(pressed)
    
})