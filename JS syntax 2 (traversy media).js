
//functions
//OOP
//DOM Selection /1.10hr
//DOM manipulation
//Events
//basic form validation


//Switch,case,default SCD  53min
const color = 'green'

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red/blue');
        break;
}
/*if switch (CONDITION) matches, it executes the following block
else it goes to default code block. sth like if/else try/except */



//functions //resume at 55:15min;
function fx(num1 = 1, num2) {   //can set default value
    return(num1 + num2)
}
console.log(fx(5,5)) //this overrides the default value given

// shortcut Arrow function, name fx as variable instead with =>
const fx = (num1 = 1, num2 = 2) => num1 +num2;
console.log(fx(5,5))  


//OOP 59:30min
//unique thing about making a 'new class' is just function class_name
function Person(firstName, lastName, dob) {  //constructor class
    this.firstName = firstName
    this.lastName = lastName;
    this.dob = new Date(dob);  //date built-in object

    this.getBirthYear = function() {
        return this.dob.getFullYear();  //getFullYear is built in fx to extract year
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() { //prototype, Look into this.
    return this.dob.getFullYear();
} 

const person1 = new Person('John', 'Doe', '4-3-1992'); //instantiate object
console.log(person1) //JS can print object directly, output similar to object literal
console.log(person1.firstName) //Object->property

console.log(person1.dob.getBirthYear());  
console.log(person1.dob.getFullYear());  

//Class 1hr8min
class Person {
    constructor(firstName, lastName, dob) {  // same  constructor 
        this.firstName = firstName
        this.lastName = lastName;
        this.dob = new Date(dob);  
}
getBirthYear = function() { //same way as above, just remove (this.) pre-fix
    return this.dob.getFullYear();  
}
getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
}

//===================================
//DOM Selection 1.10hr
console.log(window) //window object
// Single element selector (document is a section to access DOM, inspect element)
let x = document.getElementybyID('my-form') // pick <form id="my-form"> in html
let y = document.querySelector('.container') // pick container class
let w = document.querySelector('h1') // pick h1 tag
console.log(x)

// Multiple element (eg select all li items)
let zItems = document.querySelectorAll('.item') /*returns a Nodelist
which is just an array, cna use array methods*/
let a = document.getElementybyClassName('item') //only select class, hence no dot .
//this returns HTMLCollection, hence need convert array to use array methods
//best use query.SelectorAll anyway easiest to pick things from DOM

zItems.forEach((item) => console.log(item)) //example of looping through array
zItems.remove() //takes away the stuff in the DOM

//DOM manipulation 1hr20min
zItems.lastElementchild.remove(); // remove last element only
zItems.firstElementChild.textContent = 'Hello'; // replace content to Hello
zItems.children[1].innerText = 'Brad'; //another way to replace via index
zItems.lastElementChild.innerHTML = '<h4>Hello</h4>' //interact html using JS

const btn = document.querySelector('.btn'); //mouseout, mouseover events.
btn.getElementsByClassName.background = 'red'; //changes CSS property in JS

//Events 1hr.25min
btn.addEventListener('click', (e) => {
    e.preventDefault(); //to make the button NOT submit to page
    console.log('clock')
    console.log(e.target.className);
    console.log(e.target.id);        
    document.querySelector('#my-form')
    document.getElementsByClassName.background = '#ccc'; 
    document.querySelector('body').classList.add('bg-dark') 
    /* adds a class to <body> tag. another way to change CSS in JS 
    thus UI is interactive, ie press button & background color change*/
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'

})

//basic form validation 1hr31min

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit) //onSubmit function below

function onSubmit(e) {
    e.preventDefault(); //rmb, e means event
    console.log(nameInput.value)
}









