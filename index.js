const originalQuotes = [
    "Your drinking has made you a totally different person. You've lost your lust for life.", 
    "Or what about a thousand plastic meatballs!", 
    "If you keep asking me questions, I'm going to beat the crap out of you.", 
    "I can't think of any good car idea because this guy keeps farting.", 
    "The first hour was bliss and then the crying started.", 
    "I eat paper all the time!", 
    "I bet you love your mother-in-law.", 
    "Hold that door! Hold that door!", 
    "A good steering wheel that doesn't fly off your hand while your driving.", 
    "Do you understand? The tables are my corn!", 
    "Lets slop em up!", 
    "Hey look at that! We got the same shirt on, shirt brothers.", 
    "I see the world wildly and in wild ways.", 
    "Santa brought it early!", 
    "Until your apart of this turbo team, walk slowly!", 
    "I don't like him, I don't want him to have hair", 
    "Which ones will move? Which ones will talk? More importantly which ones can dance!", 
    "You can't change the rules just cause you don't like how I'm doing it.", 
    "What a crop, that's a big crop!",
    "I was showing my date a picture of a bunny and what the bunny was doing, and then 150 springs hit her in the face.",
    "I wanted to look extraordinary for you tonight. But it appears my barber may have been looking at a picture of a dog when he gave me this haircut.",
    "Cause I'm a rat mom.",
    "That's not enough time. I blanked. I gagged on a purple feather",
    "Back away, banana breath. What the hell did you just eat? A banana?"
];
const quotes = [
    "Your VERBING has made you a totally different person. You've lost your NOUN for life.", 
    "Or what about a thousand NOUN!", 
    "If you keep asking me questions, I'm going to VERB the NOUN out of you.", 
    "I can't think of any good NOUN ideas because this guy keeps VERBING.", 
    "The first hour was bliss and then the VERBING started.", 
    "I eat NOUN all the time!", 
    "I bet you love your NOUN.", 
    "Hold that NOUN! Hold that NOUN!", 
    "A good NOUN that doesn't fly off your hand while your VERBING.", 
    "Do you understand? The NOUN are my corn!", 
    "Lets VERB em up!", 
    "Hey look at that! We got the same NOUN on, NOUN brothers.", 
    "I see the NOUN wildly and in wild ways.", 
    "NOUN brought it early!", 
    "Until your apart of this NOUN, VERB slowly!", 
    "I don't like him, I don't want him to have NOUN.", 
    "Which ones will move? Which ones will talk? More importantly which ones can VERB!", 
    "You can't change the NOUN just cause you don't like how I'm doing it.", 
    "What a NOUN, that's a big NOUN!",
    "I was showing my date a picture of a NOUN and what the NOUN was doing, and then 150 springs hit her in the face.",
    "I wanted to look extraordinary for you tonight. But it appears my barber may have been looking at a picture of a NOUN when he gave me this haircut.",
    "Cause I'm a NOUN mom.",
    "That's not enough time. I blanked. I gagged on a NOUN.",
    "VERB away, NOUN breath. What the hell did you just eat? A NOUN?"
];
console.log(`The quotes and original quotes are ${quotes.length === originalQuotes.length ? '' : ' not '}equal array lengths`);
const verbs = ["drink", "beat", "fart", "cry", "drive", "slop", "walk", "dance", "back"];
const nouns = ["lust", "plastic meatballs", "crap", "car", "paper", "mother-in-law", "door", "steering wheel", "tables", "santa", "turbo team", "hair", "rules", "crop", "shirt", "world", "dog", "bunny", "rat", "purple feather", "banana"];

const generateRandomIndex = arr => {
    return Math.floor(Math.random() * arr.length);
}

let randomQuoteIndex = 0;


let buttonPressed = (event) => {
    const doc = event.target.ownerDocument;
    const grabbedQuotes = generateRandomQuote();
    doc.getElementById('generated-quote').innerHTML = grabbedQuotes[1];
    const actualQuote = doc.getElementById('actual-quote');
    actualQuote.innerHTML = "Click to reveal the actual quote";
    actualQuote.value = grabbedQuotes[0];
    actualQuote.parentElement.style.display = 'block';
}
const generateRandomQuote = () => {
    const randQuoteIndex = generateRandomIndex(originalQuotes);
    let randomQuote = quotes[randQuoteIndex];
    let results = [];
    results.push(originalQuotes[randQuoteIndex])

    const randomNoun = nouns[generateRandomIndex(nouns)];
    let randomVerb = verbs[generateRandomIndex(verbs)];
    
    while (randomQuote.includes('VERBING')) {
        randomVerb = randomVerb.slice(-1) === 'e' ? randomVerb.slice(0, -1) : randomVerb;
        randomVerb += 'ing';
        randomQuote = randomQuote.replace('VERBING', randomVerb);
    }
    while (randomQuote.includes('VERB')) {
        randomQuote = randomQuote.replace('VERB', randomVerb);
    }
    while (randomQuote.includes('NOUN')) {
        randomQuote = randomQuote.replace('NOUN', randomNoun);
    }
    results.push(randomQuote.charAt(0).toUpperCase() + randomQuote.slice(1))
    return results;
}
const revealQuote = (event) => {
    const actualQuote = event.target.ownerDocument.getElementById('actual-quote');
    actualQuote.innerHTML = actualQuote.value;
}

