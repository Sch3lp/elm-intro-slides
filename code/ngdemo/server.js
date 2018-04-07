const express = require('express');
const _ = require('lodash');
const path = require('path');

const app = express();

const quotes = [
    {"id":1,"author":"Jamie", "text":"Als ze mn pet afpakken, ja dan flip ik altijd."},
    {"id":1,"author":"Jamie", "text":"Als ze mn pet afpakken, ja dan flip ik altijd."},
    {"id":2,"author":"Gordon", "text":"Not the hero we deserved, but the hero we needed."},
    {"id":3,"author":"Tim", "text":"Elm Elm Elm Elm Elm Elm Elm Elm Elm Elm Elm Elm Elm"}
]

app.get('/api/quotes/:id', (req, res) => {
    let requestedQuoteId = req.params.id;
    console.log(`Returning quote for quoteId: ${requestedQuoteId}`);
    res.set('Access-Control-Allow-Origin', '*');
    let quotesWithId = quotes.filter((quote) => quote.id == requestedQuoteId);
    quotesWithId.length > 0 ? res.json(quotesWithId[0]) : res.status(404).render();
})

app.get('/api/quotes', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(quotes);
})

app.listen(3000, function() {
    console.log('API listening on port 3000!')
})