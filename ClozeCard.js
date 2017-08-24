// imports basic card js
var BasicCard = ("./basiccard.js");

//creates constructor for ClozeCards
var ClozeCard = (partialText, clozeDeletion, fullText){
  // this.cards will hold all of the basiccards
    this.cards = [];
    this.partialText = partialText;
    this.clozeDeletion = clozeDeletion;
    this.fullText = fullText;

// a method that creates cards using our basic card constructor
// push the new card to the this.cards and updates it
    this.addBasicCard = function(f, b){
      this.cards.push(new BasicCard(f, b));
};

// this method will tell you how many cards are in the deck
  this.cardCount = function() {
    return this.cardCount.length;
  };
};

//export clozeCard constructor

module.exports = ClozeCard;
