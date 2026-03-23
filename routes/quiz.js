const express = require('express');
const router= express.Router();
const {readFile} = require('fs').promises;
//Trabajo aqui

router.get("/", (req, res)=>{
    //Get 4 words with thier pos and def and send back to the other page

    //send back and render quiz.ejs

});

let getWords = async()=>{
    //get a rdm part of speech

    //based on tht, pick 4 words that match
}

let getRandomPart = ()=>{
    let parts = ['noun', 'verb', 'adjective'];
    let randomIndex = Math.floor(Math.random() * parts.length);
    let randomPart = parts[randomIndex];
    return randomPart;
}   

let shuffle = (array)=>{
    for (let i = array.length - 1;i>=0;i--) {
  let randomNumber= Math.floor(Math.random() * (i + 1));
  [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
    
}

module.exports = router;