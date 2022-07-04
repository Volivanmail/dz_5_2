const cl = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

// const click = Number(cl.textContent);

img.onclick = cc()

function cc () {
    cl.textContent = Number(cl.textContent) += 1;
    if (Number(cl.textContent) % 2 == 0) {
      img.width += 100;
    }
    else {
      img.width -= 100;
    }
}