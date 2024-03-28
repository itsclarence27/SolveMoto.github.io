console.clear();

// The game variable 
const inputEl = document.querySelector('#input-el');
const checkBtn = document.querySelector('#check-btn');

// For selecting the nextquestion
const next = document.querySelector("#nextQuestion");


// The modal variables
// modal, the answer, x sign
const modal = document.querySelector("#myModal");
const theAnswer = document.querySelector(".theAnswer");
const closeBtn = document.querySelector(".close");

// Answer: "Correct, good work,", "Incorect, try again"

let answerOptions = ["Correct, good work", "Incorect, try again"];


function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

// this is just for styling
const num1Element = document.getElementById("item1");
const num2Element = document.getElementById("item2");

num1Element.style.color = 'blue';
num2Element.style.color = 'red';
// this is for displaying question
const question1 = num1;
const question2 = num2;
document.getElementById("item1").textContent = question1;
document.getElementById("item2").textContent = question2;

// this will restore the value or sum of the two numbers
window.correctAnswer = num1 * num2;
}

//here we will get the user inputs

//here the condition if its correct or not
checkBtn.addEventListener("click", function(){
    const userInput = parseInt(inputEl.value);
    modal.style.display = "block";
    if(userInput === correctAnswer) {
        next.style.display = "block";
        modal.style.background = "rgb(46, 204, 113)";
        theAnswer.textContent = answerOptions[0];
    }else {
        modal.style.background = "#e74c3c";
        theAnswer.textContent = answerOptions[1];
    }
})

closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

next.addEventListener("click", function(){
    generateQuestion();
    next.style.display = "none";
    modal.style.display ="none";
})
    generateQuestion();
