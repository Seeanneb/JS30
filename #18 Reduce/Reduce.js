const timeNodes = [...document.querySelectorAll('[data-time]')];
// turn the nodelist into an array

const seconds = timeNodes
    .map(node => node.dataset.time) // grab each individual html by their data set
    .map(timeCode => {
        const [minutes, seconds] = timeCode.split(':') //splits time into 2 part array: first is minutes second is seconds
        .map(parseFloat) // turn all the minutes and seconds into integers
        return (minutes * 60) + seconds // turn the minutes into seconds with * 60 for total seconds
        console.log(minutes, seconds)
    }).reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds; 

    const hours = Math.floor(secondsLeft / 3600); //how many whole hours
    secondsLeft = secondsLeft % 3600; // the left over seconds after hours is rounded
    
    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60

    console.log(`${hours}:${mins}:${secondsLeft}`)





