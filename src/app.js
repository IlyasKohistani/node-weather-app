const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const app = express();
const port = 3000;

const publicDirPath = path.join(__dirname, '../public');// go one level up from root directory to the public dir and return it as string.
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs'); // set the engine for dynamic views

app.set('views', viewsPath);// set the engine views directory the default one is 'views'

hbs.registerPartials(partialsPath);// this will make partials available in the views

app.use(express.static(publicDirPath));// set static files directory to serve

// showing response based on the specified route but statically only send as string to be rendered.
// app.get('/', (req, res) => {
//     res.send('Hello Express!');
// })

// render a view from views directory with hbs engine
app.get('', (req, res) => {
    res.render('index', { title: 'Weather' });
})


app.get('/weather', (req, res) => {
    const address = req.query.address;
    if (!address)
        return res.send({ error: 'You must provide an address!' })

    geocode(address, (error, { latitude, longitude, location } = {}) => { // this will extract each variable from our given object and make available the extracted ones and if undefined it will be object of empty
        if (error)
            return res.send(error);

        forecast(latitude, longitude, (error, forecastData = {}) => { //binding variables from object
            if (error)
                return res.send(error);

            return res.send({
                forecast: forecastData,
                location,
                address
            });

        })
    })
})

// 404 PAGE
app.get('/help/*', (req, res) => {
    res.render('404', { title: '404', errorMessage: 'THERE IS NO HELP PAGE AVAILABLE AT THE MOMENT!' });
})

// 404 PAGE
app.get('*', (req, res) => {
    res.render('404', { title: '404', errorMessage: 'PAGE NOT FOUND!' });
})



app.listen(port, () => {
    console.log(`Server has been running on port number ${port}.`)
})