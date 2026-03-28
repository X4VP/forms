const express = require('express');
const { get } = require('http');
const router= express.Router();
const {readFile} = require('fs').promises;
//Trabajo aqui

router.get("/", async (req, res)=>{
    //Get 4 words with thier pos and def and send back to the other page
    let chosenWords= await getWords();
    //send back and render quiz.ejs
   console.log("Chosen Words:", chosenWords);  //check if its working
   res.render('quiz', {chosenWords});
   
});
router.post("/", (req, res)=>{
    console.log(req.body);
    let {userChoice, correctDef,totalQuestions,totalCorrect} = req.body;
    if (userChoice === correctDef) {
        console.log("User guessed Correctly!");
        let score= totalQuestions+1;
    }
    let total= totalQuestions+1;
    //hw hint its the 7-12 lines
    //get another new set of words..how?
    //send that set of words back with the user answers
    //send some other data back?
});
let getWords = async()=>{
    //get a rdm part of speech
     let randomPart= getRandomPart();      //i should have noun,verb,adjective
     
    //based on tht, pick 4 words that match
       let allWords = await readFile('resources/allWords.json', 'utf-8');
       let wordArray= allWords.split('\n'); //splits the single string into an array where each line is an indec
       shuffle(wordArray); //shuffle that array

       let choices = [];
       while (choices.length < 5) { //keep looping until we have 5 choices
        let line = wordArray.pop();  // one line as a string
        let [word, part, def] = line.split('/t');
        if (part === randomPart) { //if the part of word matches my rdm part we pciked, we keeps
            choices.push(line)
        }
    }
    return choices;
}

let getRandomPart = ()=>{
    let parts = ['noun', 'verb', 'adjective'];
    let randomIndex = Math.floor(Math.random() * parts.length);
    let randomPart = parts[randomIndex];
    return randomPart;
}   

let shuffle = (array)=>{
    //fisher Yales alg
    for (let i = array.length - 1;i>0;i--) {
  let randomNumber= Math.floor(Math.random() * (i + 1));
  [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
    }
}

module.exports = router;