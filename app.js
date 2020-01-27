const btns = Array.prototype.slice.call(document.querySelectorAll('.btn'));
const answer = document.querySelector('#answer');
let currentNumber = '';
let firstNumber;
let operator;

btns.map(btn => btn.addEventListener('click', (evt) => {
    if (! isNaN(parseInt(evt.target.innerText))) {
        saveCurrentNumber(evt.target.innerText);
    }

    if (isNaN(parseInt(evt.target.innerText))){
        activateOperator(evt);
    }
}));

function saveCurrentNumber(number) {
    currentNumber += number
    updateDisplay();
}

function updateDisplay(){
    answer.innerText = currentNumber
}

function activateOperator(evt) {
    btns.map(btn => btn.classList.remove('active'));
    evt.target.classList.add('active');
    answer.innerText = '';
    firstNumber = parseInt(currentNumber)
    currentNumber = '';

    if(evt.target.innerText !== 'Arvuta') {
        operator = getOperator(evt.target.innerText)
    }

    if(evt.target.innerText === 'Arvuta') {
        answer.innerText = eval(firstNumber + operator  + currentNumber) 
    }

}