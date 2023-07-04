const btn = document.querySelector('.fa-solid');

const popup = document.querySelector('#pop')

let clicked = false;
btn.addEventListener('click', () => {
    if (!clicked) {
        popup.style.display = 'block';
        clicked = true;
    } else {

        popup.style.display = 'none';
        clicked = false;
    }
})