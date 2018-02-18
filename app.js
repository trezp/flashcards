// 1. First, let's build out some basic functionality with some mock data
// 2. Write some quick CSS to make the data look like a card. 
// 3. Now we want to toggle showing the front and back sides of the cards. 
// If the user clicks on the card and the front is showing, we want to show the 
// back. If the user clicks on the card and back is showing, we can to show the
// front. 

const cards = [
  {
    'card_id': 1,
    'question': 'This is the front side of the card.',
    'answer': 'This is the back side of the card.',
    'active': false
  },
  {
    'card_id': 2,
    'question': 'This is card 2',
    'answer': 'This is the back side of card 1.',
    'active': false
  },
  {
    'card_id': 3,
    'question': 'This is card 3',
    'answer': 'This is the back side of card 3.',
    'active': false
  },
]

new Vue({
  el: '#cardList',
  data: {
    cards: cards,
  },
  methods: {
    toggleCard: function(card){
      card.active ? card.active = false : card.active = true;
    }
  }
});