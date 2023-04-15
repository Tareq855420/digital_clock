const hourCl = document.getElementById("hour");
const minutesCl = document.getElementById("minutes");
const secondsCl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if ( h > 12) {
        h = h - 12 ;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourCl.innerText = h;
    minutesCl.innerText = m;
    secondsCl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()