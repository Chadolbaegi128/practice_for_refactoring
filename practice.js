
cards.init({
    table:'#card-table',
    cardUrl: 'img/cards.png',
    cardSize: {
        weight: 69,
        height: 94,
        padding: 100,
    },
    type:STANDARD
});

deck = new cards.Deck();

deck.addCards(cards.all);
deck.render({immediate:true});

upperhand = new cards.Hand({faceUp:false, y:60});
lowerhand = new cards.Hand({faceUp:true,  y:340});

$('#deal').click(function() {
    deck.deal(3,);
})