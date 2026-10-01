const person = {
  name: "Azamatshekh",
  subname: "Boboev",
  mail: "azamatshekhboboev@gmail.com",
  age: 17,
  country: "Tajikistan",
  city: "Khujand",
}
  
const car = {
  brand: "Audi",
  model: "R8",
  year: 2024,
  color: "black",
  typeOfGearbox: "manual_transmission",
}

car.owner = person;
console.log(car);

function addMaxSpeed(car) {
    if (!("maxSpeed" in car)) {
        car["maxSpeed"] = 317;
    }
}

function getProperty(person, property) {
    console.log(person[property]);
}

const products = ["Хлеб", "Молоко", "Мясо", "Масло", "Соль"];

const games = [
    { title: "Call of Duty 4: Modern Warfare", company: "Infinity Ward", year: 2007 },
    { title: "1Call of Duty: Modern Warfare 2", author: "Infinity Ward", year: 2009 },
    { title: "Call of Duty: Modern Warfare 3", author: "Infinity Ward", year: 2011 },
    { title: "Call of Duty: Black Ops", author: "Infinity Ward", year: 2010 },
];

games.push({
    title: "Need for Speed: Most Wanted",
    company: "EA Canada",
    year: 2005
});

const anotherGames = [
    { title: "Spec Ops: The Line", company: "Yager Development", year: 2012 },
    { title: "Spider-Man: Web of Shadows", company: "Activision", year: 2008 },
]

const allGames = [...games, ...anotherGames];

function addRare(games) {
      return games.map(game => {
        return {
            ...game,
            isRare: game.year < 2010
        };
    });
}
