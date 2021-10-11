const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 1337;

// public static path
const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get('', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', {
        page: 'About'
    });
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen('1337', () => {
    console.log(`App listening at Port: ${port}...`);
});