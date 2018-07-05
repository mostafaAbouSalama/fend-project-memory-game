// Declaring all needed functions

// Function that flips a card open and check to see if it was already flipped up before
function flipThisCard(event) {
  let thisCard = event.target;
  for (let i = 0; i < deckOfCardsArray.length; i++) {
    if (deckOfCardsArray[i] === thisCard) {
      if (openCardsInDeck.length % 2 === 0) {
        openCardsInDeck.push(deckOfCardsArray[i]);
        thisCard.className = "card open show";
      } else {
        openCardsInDeck.push(deckOfCardsArray[i]);
      }
    }
  }
  if (openCardsInDeck.length % 2 === 0) {
    let i = openCardsInDeck.length - 1;
    if (openCardsInDeck[i] !== openCardsInDeck[i - 1]) {
      if (thisCard.className === "card") {
        thisCard.className = "card open show";
      }
    } else {
      openCardsInDeck.pop();
    }
  }
}

// Function that stores face-up cards in an array
function storeMeInOpenArray(event) {
  // if (openCardsInDeck.length % 2 === 0) {
  //   if (event.target.className === "card open show") {
  //     arrayOfOpenCards.push(event.target);
  //   }
  // } else if (openCardsInDeck.length === 1) {
  //   if (event.target.className === "card open show") {
  //     arrayOfOpenCards.push(event.target);
  //   }
  // }
  arrayOfOpenCards = openCardsInDeck;
}

// Function that flips down two last cards if they do not match
function pairDoNotMatch(openCardsArray) {
  let i = openCardsArray.length - 1;
  openCardsArray[i].className = "card";
  openCardsArray[i - 1].className = "card";
  openCardsArray.pop();
  openCardsArray.pop();
}

// Function that checks the array of open cards to see if there is two cards in it and compare them
function compareTwoCards(event) {
  if (arrayOfOpenCards.length % 2 === 0) {
    let i = arrayOfOpenCards.length - 1;
    if (arrayOfOpenCards[i].lastElementChild.className === arrayOfOpenCards[i - 1].lastElementChild.className) {
      arrayOfOpenCards[i].className = "card match";
      arrayOfOpenCards[i - 1].className = "card match";
    } else {
      pairDoNotMatch(arrayOfOpenCards);
    }
  }
}

document.querySelector(".deck").addEventListener("click",function(){
  if (event.target.nodeName === "LI") {
    event.preventDefault();
    flipThisCard(event);
    storeMeInOpenArray(event);
    compareTwoCards(event);
  }
});

/*
 * Create a list that holds all of your cards
 */
let deckOfCardsArray = Array.from(document.getElementsByClassName("card"));
let arrayOfOpenCards = [];
let openCardsInDeck = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
