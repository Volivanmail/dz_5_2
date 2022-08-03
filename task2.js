const counter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

let clicks = Number(counter.textContent);
img.onclick = cc;

function cc() {
    
    img.width = ++counter.textContent % 2 ? 250 : 200;

    counter.textContent = clicks+=1;
}