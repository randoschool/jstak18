const btns = Array.prototype.slice.call(document.querySelectorAll('.btn'));
const answer = document.querySelector('#answer');

btns.map(btn => btn.addEventListener('click', (evt) => {
    answer.innerText = evt.target.innerText
}));

