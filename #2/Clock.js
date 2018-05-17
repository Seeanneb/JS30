const secondsHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

function setDate(){
    var time = new Date()
    var seconds = time.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    var minutes = time.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    var hour = time.getHours()
    var hourDegrees = ((hour / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`

    console.log(`${hour}  ${minutes}  ${seconds}`)
    console.log(secondsDegrees)

   
}
setInterval(setDate, 1000);
