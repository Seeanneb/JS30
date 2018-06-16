const divs = document.querySelectorAll('div');
const Button = document.querySelector('button')

function logText(e){
    console.log(this.classList.value);
    console.log(this)
    console.log("clicked!")
    e.stopPropagation(); // stop bubbling upwards
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: true,
    once: true // allows the event to only fire once
}))

Button.addEventListener('click', logText, 
{
    once: true
})