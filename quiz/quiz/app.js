'use strict';

const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "London"],
      answer: "Paris"
    },
    {
      question: "What is the result of 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Neptune", "Mars"],
      answer: "Jupiter"
    },
  ];
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  const nextButton = document.getElementById('next');
  const restartButton = document.getElementById('restart');




fun showqes(){
  const qe = questions.map(item => item.question);
  questionElement.innerHTML = qe[vauleqe];



}
const options = questions.map(item => item.options);
const answers = questions.map(item => item.answer);

let vauleqe =0
 

optionsElement.innerHTML = options[vauleqe];