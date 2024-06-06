// Import the npm package express from the node_modules map

import express from 'express';

// Import the fetchJson function from the ./helpers directory
import fetchJson from './helpers/fetch-json.js';

// Create a new express app
const app = express();

// Set ejs as the template engine
app.set('view engine', 'ejs');

// Make working with request data easier
app.use(express.urlencoded({ extended: true }));

// Set the directory for ejs templates
app.set('views', './views');

// Use the 'public' directory for static resources
app.use(express.static('public'));

const productsURL = "https://cdn.contentful.com/spaces/x2maf5pkzgmb/entries/?access_token=VcJDwIe2eizDEjIwdVdDsF7tcQZ-0_uIrcP4BiDULsg&content_type=product&select=fields"

app.get('/', function(request, response){
    Promise.all([
        fetchJson(`${productsURL}`)
    ]).then((productData) => {
        response.render('index', {products: productData})
        console.log(products)
    });
})

// POST route for the index page
app.post('/', function (request, response) {
    // Currently not handling POST data, redirect to the homepage
    response.redirect(303, '/');
});

// Set the port number for express to listen on
app.set('port', process.env.PORT || 2024);

// Start express and listen on the specified port : 2024
app.listen(app.get('port'), function () {
    // Log a message to the console with the port number
    console.log(`http://localhost:${app.get('port')}`);
});
