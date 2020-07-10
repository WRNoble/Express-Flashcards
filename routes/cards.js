const express = require('express');
const router = express.Router();
const data = require('../data/flashcardData.json');
const { cards } = data; //separated out the cards because this is the array with data we want.

router.get('/:id', (request, response) => {
    response.render('card', { 
        prompt: cards[request.params.id].question,
        hint: cards[request.params.id].hint
    }); 
});

module.exports = router;