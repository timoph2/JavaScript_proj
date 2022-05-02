//JS DOM 17min (web dev simplified YT)


//Adding Elements to a page 1min
const body = document.body  //here we select 'body' tag
body.append('hello world', 'bye') //add elements & strings
 
//Creating Elements 3min
body = document.body
let div = document.createElement('div') //elements refer to div/p
//a reference has been made, but havent create the html element yet.
body.append(div) //html element now created


// *Modifying elements 4min, aka adding text to created div
div.textContent = 'Hello 1'   //textContent assign string within div tag

//just use tag.textContent 
div = document.querySelector()

// *Modifying elements html 7:30min
div.textContent = "<strong> Hello 3 </strong>"  //this only show tags as a string
div.innerHTML = "<strong> Hello 3 </strong>";   //inner.html enables bold text tag
//but this is bad security because users can modify your html code directly

const strong = document.createElement('strong')
strong.innerText = "Hello 2 "
div.append(strong)
div.innerHTML = "<strong> Hello 2 </strong>"
//this a more secure way to not let user mofidy html directly.
//by creating intended text in strong
//then append it to div
//then modify div to be .innerHTML

//Removing Elements 10min
body = document.body
let div = document.querySelector('div')
let spanHi = document.querySelector('#hi')
let spanBye = document.querySelector('#bye')

spanBye.remove() //.remove() the variable directly
 

//Modifying element attributes 12min
spanHi.getAttribute("id")
spanHi.setAttribute("title", "sdsds")   //eg html set attribute title =.... which is pop up when hovering
spanHi.removeAttribute("title")

//another way to set attribute
spanHi.id = "title"

//modifying data attributes 14min
console.log(spanHi.dataset) //returns data-test = attribute in the HTML tag.
spanHi.dataset.newName = "hi"

//modifying element classes 16min
//html == <span id="hi" class="hi_1 hi_2"
spanHi.classList.add("class_3")           //this adds 3rd class
spanHi.classList.remove("Hi_1")           //removal of class
spanHi.classList.toggle("class_4", true)   //remove if existing (false), else add if non-esistent (true)



//modifying element style 17:30min
spanHi.style.color = "red"             //adjust inline-style instead
spanHi.style.backgroundColor = "red"  //notice camelCase backgroundColor vs background-color:, it will auto convert.







