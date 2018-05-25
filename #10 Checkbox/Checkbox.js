const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

handleCheck = (e) => {
    if (e.shiftKey) {
        console.log('Shift that shit')
    }
    else{
        console.log('fck u')
    }
}
 checkboxes.forEach(item => {
     item.addEventListener('click', handleCheck)

 })
                                    // console.log(item)


