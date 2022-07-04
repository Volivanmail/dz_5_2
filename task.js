const counter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

let clicks = Number(counter.textContent);
img.onclick = cc;

function cc() {
    
    if (Number(counter.textContent) % 2 == 0) {
      img.width += 100;
    }
    else {
      img.width -= 100;
    }
    counter.textContent = clicks+=1;
}