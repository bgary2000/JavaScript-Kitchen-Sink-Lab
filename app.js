//Variable with name as a value
let firstName = 'Bernard';

//Constant variable
const statesInUnitedStates = '50';

//Add two variables to get the sum
let num1 = 5;
let num2 = 4;

sum = num1 + num2;

//If -else conditional statement to define the index of a name variable
if (firstName.charCodeAt(0) == 'L') {
    alert('Back of the line');
} else {
    alert('Next!');
}

//Function that displays an alert message
function sayHello() {
    alert('Hello World!');
}

//Function call
sayHello();

//Function with two arguments
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you are not old enough to view this page!');
    }
}

//Call function
checkAge('Charlie', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

//Array of favorite vegetables
let favoriteVegetables = ['brocolli', 'carrots', 'mushrooms', 'potatoes', 'olives'];
for (var i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
}

//Array for five objects with two parameters
let friends = [
    {
        name: 'Tonya',
        age: 25
    },

    {
        name: 'Paul',
        age: 35
    },

    {
        name: 'Jeff',
        age: 17
    },

    {
        name: 'Tim',
        age: 18
    },

    {
        name: 'Faye',
        age: 32
    }
];

//Create a loop that calls the function
for (i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}

//Create a function that checks length of word
function getLength(anyWord) {
    return anyWord.length;
}

//Call a function and save as a variable
let anyWord = getLength('Hello World!');

//Check if a number is even or odd and log to console
let testNumber = anyWord % 2;
if (testNumber == 0) {
    console.log('The World is nice and even!')
} else {
    console.log('The world is an odd place!');
}






