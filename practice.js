
cards.init({table:'#card-table', type:STANDARD});

deck = new cards.Deck();
deck.x -= 50;

deck.addCards(cards.all);
deck.render({immediate:true});

upperhand = new cards.Hand({faceUp:false, y:60});
lowerhand = new cards.Hand({faceUp:true,  y:340});

