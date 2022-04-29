
//variables & data types
//arrays
//object literals
//string,array,object methods
//loops
//conditionals
//functions
//OOP
//DOM Selection /1.10hr
//DOM manipulation
//Events
//basic form validation



//intro
/*
Javascript is a high level, intepretated programming language (what does those 2 things mean)
JS is multi-paradigm (wdym)
why use JS? because it can run in the browser too, not limited to server like python
other tutorials == JS DOM / JS OOP / High Order Array methods / Async JS / Fetch API & Ajax /  
-usually you put JS code under HTML/CSS cuz you want it to load after them
*/
    alert('Hello World'); //pop up in browser
//how to link js to html in seperate file
<script src="file.js">  
    JS code here if write in html file;
</script>
// include that src = open & close tag in the html file to link




//variables (12min, eg)
let age = 30;
age = 31; // let allows you to re-assign variable

const height = 150;   
//height = 150;  error, const cannot re-assign value


//variables & data types (14min)
let y; // same 'undefined' value
const z = undefined;

console.log(typeof y);  //check data type

//strings & methods
console.log('Name:' + firstname + " " + lastname);//string concatenation
let x = (`My name is ${firstname} and ${lastname}`);//template string, 
//like PHP double quotes"", back ticks` `. this saves you from repeating quotes '' & +

console.log(s.length); //return length of string
console.log(s.substring(0,5)); // slice operator
console.log(s.split(' ')); // convert string to array by removing delimiter. 
//aka php explode python.split



//arrays 24min
const toys = new Array('car', 'doll', 'bear');
const toy = ['car', 'doll', 'bear'];
toys[3] = 'crane'; // to append value in array, const allows it just not 
//outright, toys = [] reassignment. (this bad practice, cos need know length of array 
//else risk uninteded replacement, hence use .push() better

toys.push('mice') // append value to [-1] index
toys.unshift('hammer') //append value to [0], push all elements back. like stack push.
toys.pop(); //remove last element
let ww = toys.indexOf('bear'); //returns index of target

console.log(toys); //can print array unlike php
console.log(toys[0]); //cars output
console.log(Array.isArray(toys)); //returns true if toys is array type

//================================
//================================
//================================
//================================
//================================
//object literals 30min (dictionary)
const person = {
    firstName: 'john',
    lastName: 'don',
    age: 30,
    hobbies: ['music','movies'],
    address: {
        street: '50 main st',
        city: 'boston'
    }
}



console.log(person.age)
console.log(person.hobbies[0])
// call object literal, is replace ['key'] with .key 
//(& that key has no ' ', just firstName: 'value'

const { firstName, address: {city} } = person;
console.log(firstName) // returns John
console.log(city) // returns Boston (dict in dict use { } again)
//then call it by stating key: {key2}, console.log(key2)
// so can access the key directly without stating dictionary.key

person.email = 'john@gmail.com' //updating dict == dict[key] = value
console.log(person) //returns with added email: 'john@gmail.com'
//



//array of objects 34min
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    { 
        id:2,
        text: 'meet boss',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos); // JSON.stringify(list)
console.log(todoJSON);  //returns JSON, where key-value both " "



//for loops 37:50min.
for (let i = 0; i <10; i++) { //same as php, run til condition untrue
    console.log(i);
    console.log(`loop counter: ${i}`);
}

let i = 0; //remember declare counter
while (i < 10) {
    console.log(`loop counter: ${i}`);
    i++;
}



for (let todo of todos) {   //foreach ($objects as $obj) { ... } 
    console.log(todo.id);
}

//looping through a list
for (let i = 0; i < todos.length; i++) { 
    console.log(todos[i].text);
}

//high order array methods iteration
//forEach, .map() (make array of results), 
//.filter() (new array based on condition)
todos.forEach(function(todo) {
    console.log(todo.text);
}); // outputs 'take out trash' 'meet boss' 2 strings

const todoText = todos.map(function(todo) {
    return todo.text;
}); 
console.log(todoText); 
// outputs ['take out trash', 'meet boss'] as array


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted); 
//return array of true completed full data

const todoCompleted_text = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
}) //combining .filter() & .map(function(list)) 
//returns [text1. text2] array only, instead of full data



//conditionals 47min
if (x === 5 || y == 10) {       // || is or && is and
    console.log('x is 5');      // == check value, === data type too.
} else if (x > 10 && y > 10) {  // space between else if
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

//ternary operator  (51:40min)
// condition? LHS:RHS 
const w = 6;
const color = w > 10 ? 'red' : 'blue';
console.log(color); // returns blue 
// True = return LHS, False = RHS
// aka shortcut 'if statement'

switch(color) //53min
 

//functions //resume at 55:15min;

//OOP 59:30min

//DOM Selection /1.10hr

//DOM manipulation

//Events

//basic form validation








 