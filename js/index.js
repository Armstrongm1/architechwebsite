// function isOdd(number){
//     if(number % 2 !== 0 ){
//         console.log('this is an odd number')
//     }else{
//         console.log('this is an even number')
//     }
// }

// isOdd(2)

// let title = document.getElementById("text");
// console.log(title)

// let titleGroup = document.querySelectorAll('.text-3xl')
// titleGroup.textContent = "hi"
// console.log(titleGroup)
 
//Events
// click
// submit
// keydown
// keyup
// mouseover
// mouseout
// change
// input

// addEventListener()
// element.addEventListener("event", function)

// const button = document.getElementById("myButton")
// button.style.backgroundColor = "red";

// button.addEventListener("click", function(){
//     alert("you clicked this button")
// })



// const hover = document.getElementById("hover")

// hover.addEventListener("mouseover", function(){
//     hover.style.color = "pink";
// })


// hover.addEventListener("mouseout", function(){
//     hover.style.color = "black";
// })

//Inline Event Handlers

// function clickMe(){
//     alert("you clicked this button")
// }

// const button = document.getElementById("myButton")
// const message = document.getElementById("message")

// button.addEventListener("click", function(){
//     if(document.body.style.backgroundColor === "red"){
//         document.body.style.backgroundColor = "white"
//         button.style.color = "black"
//         message.textContent = "current Background: White"
//     }else{
//         document.body.style.backgroundColor = "red"
//         button.style.color = "white"
//         message.textContent = "current Background: red"
//     }
// });

//Toggle
const circle = document.getElementById("circle")
const nav = document.getElementById("nav")

circle.addEventListener("click", function(){
    nav.classList.toggle('show')
})