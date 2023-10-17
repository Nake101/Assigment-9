var seconds = 00;
var tens = 00;
var mins = 00;
var getSeconds = document.querySelector('.seconds');
var getTens = document.querySelector('.tens');
var getMins = document.querySelector('.mins');
var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');
var btnReset = document.querySelector('.btn-reset');
var interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(interval);
})
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
})

function startTimer()
{
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}