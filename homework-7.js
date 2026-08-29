function getTheWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

const LIGHT_SPEED = 299792458;
function checkTheLightSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

const product = "Кружки";
const price = 210;

function buy(budget) {
    if (budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}

function showMessage() {
    console.log('How are you?')
}

const name = "Azamat";
const city = "Dubai";
let age = 17;
