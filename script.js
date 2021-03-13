const handSec = document.querySelector('.second-hand')
const handMin = document.querySelector('.min-hand')
const handHour = document.querySelector('.hour-hand')
const hand = document.querySelectorAll('.hand')
const digital = document.querySelector('.digital')
setInterval(secondsMove, 1000)

function secondsMove(){
    const now = new Date();
    const seconds = now.getSeconds()

    if(seconds > 59 || seconds < 1){ 
        hand.forEach(hand => hand.classList.remove('handTrans'))
    }else{
        hand.forEach(hand => hand.classList.add('handTrans'))
    }
    // console.log(seconds);
    const secondsInDegs = (seconds / 60) * 360 + 90
    handSec.style = `transform: rotate(${secondsInDegs}deg)`

    const minutes = now.getMinutes()
    const minutesInDegs = (minutes / 60) * 360 + 90
    handMin.style = `transform: rotate(${minutesInDegs}deg)`

    const hours = now.getHours()
    const hoursInDegs = (hours / 12) * 360 + 90
    handHour.style = `transform: rotate(${hoursInDegs}deg)`
}

setInterval(digitalClock ,1000)

function digitalClock(){
        const now = new Date()
        let hour = now.getHours()
        if(hour < 10){
            hour = '0'+ hour
        }
        let minutes = now.getMinutes()
        if(minutes < 10){
            minutes = '0' + minutes
        }
        let seconds = now.getSeconds()
        if(seconds < 10){
            seconds = '0' + seconds
        }
        digital.innerHTML = hour + ' : ' + minutes + " : " + seconds
}