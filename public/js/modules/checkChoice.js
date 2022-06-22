const firstChoices = document.querySelector('#firstChoices')
const secondChoices = document.querySelector('#secondChoices')

const detectives = document.querySelector('#detectiveChoices')
const animalChoices = document.querySelector('#animalChoices')
const schoolChoices = document.querySelector('#schoolChoices')
const fairyChoices = document.querySelector('#fairyChoices')

import { utterance } from "./chatbot.js";

const checkChoice = (choice) => { // function that checks what button the user has clicked. Parameter is the id of the button that the user pressed
    switch (choice) { // check if the button is reading or listening
        case 'zelf': 
            // in the utterance function, first pass along the text you want to be said, then the element that should be hidden and finally the element that should be shown.
            utterance('Wat leuk dat je zelf gaat lezen! Waar wil je over gaan lezen?', firstChoices, secondChoices)
            break; 
        case 'voor':
            utterance('Wat leuk dat je voorgelezen wilt worden! Waar wil je over voorgelezen gaan worden?', firstChoices, secondChoices)
            break;
        case 'detective':
            utterance('Detectives, spannend hoor! Welk onderwerp over detectives vind jij leuk?', secondChoices, detectives)
            break;
        case 'animals':
            utterance('Ik ben dol op dieren! Welk onderwerp over dieren vind jij leuk?', secondChoices, animalChoices)
            break;
        case 'school':
            utterance('School, wat leuk! Welk onderwerp over school vind jij leuk?', secondChoices, schoolChoices)
            break;
        case 'fairytales':
            utterance('Sprookjes, mijn favoriet! Welk onderwerp over sprookjes vind jij leuk?', secondChoices, fairyChoices)
            break;
    }
}

export {
    checkChoice
}