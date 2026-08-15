const cardButton1 = document.querySelector('#btn-1');
const cardButton2 = document.querySelector('#btn-2');
const cardButton3 = document.querySelector('#btn-3');

const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const thirdCard = document.querySelector('#thirdCard');

const greenColorHash = 'rgb(15, 131, 40)';
const redColorHash = 'rgb(224, 32, 32)';
const blueolorHash = 'rgb(40, 10, 209)';
const purpleolorHash = 'rgb(132, 21, 184)';
const orangeolorHash = 'rgb(214, 115, 23)';


cardButton1.addEventListener('click', () => {
    firstCard.style.backgroundColor = greenColorHash;
})

cardButton2.addEventListener('click', () => {
    secondCard.style.backgroundColor = redColorHash;
})

cardButton3.addEventListener('click', () => {
    thirdCard.style.backgroundColor = blueolorHash;
})


const allCards = document.querySelectorAll('.card');
const productButtons = document.querySelector('#btn-all');


productButtons.addEventListener('click', () => {
    console.log('click')
    allCards.forEach((card) => card.style.backgroundColor = greenColorHash);
})

productButtons.addEventListener('dblclick', () => {
    console.log('click')
    allCards.forEach((card) => card.style.backgroundColor = purpleolorHash);
})






const openGoogle = document.querySelector('#open_google');

openGoogle.addEventListener('click', OpenGoogle)

function OpenGoogle() {
    const question = confirm('Вы действительно хотите открыть новое окно Google?')
    if (question === true) {
        window.open('https://google.com')
    }
    else {
        return;
    }
}



const outputMessage = document.querySelector('#send-message');

outputMessage.addEventListener('click', () => outputConsoleLog('Hello, World!'))

function outputConsoleLog(message) {
    alert('Hello')
    console.log(message)
}


const title = document.querySelector('.navigation')

title.addEventListener('mouseover', () => {
    outputConsoleLog(title.textContent, null);
});



const changeBtnColor = document.querySelector('#btn-color');

changeBtnColor.addEventListener('click', () => {
    toggleColorButton.classList.toggle('button-toggle')
})
