const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname +'/public'));
//handlerbars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home',{
        name: 'didiEr'
    });
});

app.get('/about', function (req, res) {
    res.render('about',{
        name: 'Dayis'
    });
});
 
app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
});