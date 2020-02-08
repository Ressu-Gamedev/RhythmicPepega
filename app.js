const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs')

app.use('/scripts', express.static('scripts'));
app.use('/assets', express.static('assets'));
app.use('/style', express.static('style'));
//app.use('/style', );
//app.use('/assets', );

app.get('/', (req, res) => {
    res.render('menu');
});

app.get('/game', (req, res) => {
    res.render('game');
});

app.listen(port, ()=>  console.log(`Running on Port: ${port}`));