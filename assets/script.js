// Japanese Clock
setInterval(() => {
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
}, 500);

// Looping artikel jika bernilai ganjil akan di reverse
const artikel = document.querySelectorAll('.card');
for(let i = 0; artikel.length > i; i++){
    if(i % 2 == 1){
        artikel[i].classList.add('card-reverse');
    }
}

// Efek scroll
window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".elemen-transisi");
    
    for(let i = 0; i < elements.length; i++){
        let heightWindow = window.innerHeight;
        let topElement = elements[i].getBoundingClientRect().top;
        let scroll = 200;
        if(topElement < heightWindow - scroll){
            elements[i].classList.add("transisi");
        }else{
            elements[i].classList.remove("transisi");
        }
    }
})