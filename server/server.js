const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require ('./modules/pool.js'); 

const port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log('server is up on:', port);
})
//routes 
app.get('/david', (req, res) => {
    console.log('in get davis quotes');
    let name = 'david schwimmer';
    const query = `SELECT * FROM "quotes" WHERE "name" ILIKE $1;`;
    pool.query(query, [name]).then((results)=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('error getting david quotes', error);
        res.sendStatus(500); 
    })
})
app.get('/ross', (req, res) => {
    console.log('in get ross quotes');
    let name = 'ross';
    const query = `SELECT * FROM "quotes" WHERE "name" ILIKE $1;`;
    pool.query(query, [name]).then((results)=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('error getting ross quotes', error);
        res.sendStatus(500); 
    })
})

app.post('/quotes', (req, res)=>{
    console.log('in post quotes'); 
    let newQuote = req.body;
    console.log(newQuote);
    const query = `INSERT INTO "quotes" ("name", "quote") VALUES ($1, $2);`;
    pool.query(query, [newQuote.name, newQuote.quote]).then((results)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error posting new quote', error);
        res.sendStatus(500); 
    })
})