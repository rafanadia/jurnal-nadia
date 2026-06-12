// =======================
// SCROLL REVEAL
// =======================

const cards = document.querySelectorAll('.journal-card');

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

cards.forEach((card) => {

observer.observe(card);

});

// =======================
// TYPING EFFECT
// =======================

const words = [
"Learning ✨",
"Growing 🌷",
"Healing 🤍",
"Blooming 🦋"
];

let wordIndex = 0;

const typingText =
document.getElementById("typingText");

if(typingText){

setInterval(() => {

typingText.innerHTML =
words[wordIndex];

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

},2000);

}