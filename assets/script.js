setInterval(japanClock, 500);

function japanClock(){
    let time = new Date().toLocaleString('en-US', {timeZone: "Asia/Tokyo"})
    time = new Date(time);
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if(sec < 10){
        sec = '0' + time.getSeconds();
    }
    if(min < 10){
        min = '0' + time.getMinutes();
    }
    if(hour < 10){
        hour = '0' + time.getHours();
    }
    document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec
}

// Looping artikel jika bernilai ganjil akan di reverse
const artikel = document.querySelectorAll('.card');
for(let i = 0; artikel.length > i; i++){
    if(i % 2 == 1){
        artikel[i].classList.add('card-reverse');
    }
}