const days = document.getElementById('days'),
      minutes = document.getElementById('minutes'),
      hours = document.getElementById('hours'),
      seconds = document.getElementById('seconds');
let xYear = 2022;
setInterval(() => {
    findDate();
}, 1000);

function findDate(){
    let currentTime = new Date(),
        commingYear = currentTime.getFullYear();

    // getMonth() method returns the month (from 0 to 11)
    if(currentTime.getMonth() == 09 && currentTime.getDate() > 11){
        commingYear += 1;
    }

    let commingTime = new Date(commingYear, 09, 11); 
    let dateDiff = Math.floor(commingTime - currentTime);

    let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;

    if(currentTime.getMonth() != 09 || (currentTime.getMonth() == 09 && currentTime.getDate() != 11)){
        DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateDiff) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        SECONDS = Math.floor((dateDiff) % (1000 * 60) / 1000);
    }
    displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
}

function displayDate(d, h, m, s){
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

function setZero(timeValue){
    if(timeValue < 10){
        timeValue = "0" + timeValue;
    }
    return timeValue;
}