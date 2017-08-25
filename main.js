// require clozecard module from clozecard js
var ClozeCard = require("./clozecard.js");
var inquirer = require ("inquirer");

// start the count at 0
var count = 0;
// create a new card with constructor and store it in the clozecard
var question1 = new ClozeCard("______is a starter grass pokemon", "bulbasaur", "bulbasaur is a grass pokemon.");
var question2 = new ClozeCard("______recently bought Whole Foods", "amazon", "amazon recnently bought whole foods.");
var question3 = new ClozeCard("______ is your favorite student in class", "ian", "ian is your favorite student in class.");

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
    console.log(question1.fullText);
    console.log("nailed it");
    count++;


  }else {
    console.log("nice try!"+ question1.fullText);

  }
  if (answer.question2.toLowerCase() === question2.clozeDeletion){
    console.log(question2.fullText);
    console.log("nailed it");
    count++;


  }else {
    console.log("nice try, you didn't know that "+ question2.fullText);

  }
  if (answer.question3.toLowerCase() === question3.clozeDeletion){
    console.log(question3.fullText);
    console.log("nailed it");
    count++;


  }else {
    console.log("nice try, you didn't know "+ question3.fullText);

  }
  console.log("Right Answers: " + count);
});
