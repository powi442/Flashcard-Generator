// require clozecard module from clozecard js
var ClozeCard = require("./ClozeCard.js");
var inquirer = require ("inquirer");
var BasicCard = require("./BasicCard.js");

// start the count at 0
var right = 0;
var wrong = 0;

var questionA = new ClozeCard("How do you say teacher in Chinese?", "laoshi");
var questionB = new ClozeCard("How do you say hello in Spanish?", "hola");

// create a new card with constructor and store it in the clozecard
var question1 = new ClozeCard("______is a starter grass pokemon", "bulbasaur", "bulbasaur is a grass pokemon.");
var question2 = new ClozeCard("______recently bought Whole Foods", "amazon", "amazon recently bought whole foods.");
var question3 = new ClozeCard("______ is your favorite student in class", "ian", "ian is your favorite student in class.");

inquirer.prompt([
    {
      type: "list",
      name: "basicCloze",
      message: "What kind of flashcards would you like to use?",
      choices:["basic", "cloze"]
    }
  ]).then(function(choice){
        if (choice.basicCloze === "basic"){
          inquirer.prompt([
              {
                type:"input",
                name:"questionA",
                message:questionA.partialText
              }
            ]).then(function(basic){
                if (basic.questionA.toLowerCase() === question1.front){
                  console.log("nailed it")
                  console.log(questionA.fullText)
                }
              })
            }
          else{
            //start to ask the questions
            inquirer.prompt([
              {
                type:"input",
                name:"question1",
                message:question1.partialText
              },
              {
                type:"input",
                name:"question2",
                message:question2.partialText
              },
              {
                type:"input",
                name:"question3",
                message:question3.partialText
              }
            ]).then(function(answer){
              if (answer.question1.toLowerCase() === question1.clozeDeletion){
                console.log("nailed it");
                console.log(question1.fullText);
                right++;


              }else {
                console.log("nice try!"+ question1.fullText);
                wrong++;

              }
              if (answer.question2.toLowerCase() === question2.clozeDeletion){
                console.log(question2.fullText);
                console.log("nailed it");
                right++;


              }else {
                console.log("nice try, you didn't know that "+ question2.fullText);
                wrong++;
              }
              if (answer.question3.toLowerCase() === question3.clozeDeletion){
                console.log(question3.fullText);
                console.log("nailed it");
                right++;


              }else {
                console.log("nice try, you didn't know "+ question3.fullText);
                wrong++;
              }
              console.log("Right Answers: " + right);
              console.log("Wrong Answers: " + wrong);
            });

          }
        })
