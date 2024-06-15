import express from 'express';
import fetchJson from './helpers/fetch-json.js';

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.set('views', './views');
app.use(express.static('public'));


/* URL variables */ 

const productsURL = "https://cdn.contentful.com/spaces/x2maf5pkzgmb/entries/?access_token=VcJDwIe2eizDEjIwdVdDsF7tcQZ-0_uIrcP4BiDULsg&content_type=product&select=fields"
const sizesURL = "https://cdn.contentful.com/spaces/x2maf5pkzgmb/environments/master/entries?access_token=VcJDwIe2eizDEjIwdVdDsF7tcQZ-0_uIrcP4BiDULsg&select=fields&content_type=size"
const configProdURL = "https://cdn.contentful.com/spaces/x2maf5pkzgmb/environments/master/entries?access_token=VcJDwIe2eizDEjIwdVdDsF7tcQZ-0_uIrcP4BiDULsg&content_type=configurableProduct"

/* Different routes */

app.get('/', function(request, response){
    Promise.all([
        fetchJson(`${productsURL}`)
    ]).then((productData) => {
        response.render('index', {products: productData})
    });
})

app.get('/test', function(request, response) {
    Promise.all([
        fetchJson(sizesURL),
        fetchJson(productsURL),
        fetchJson(configProdURL)
    ]).then(([sizesData, productData, configData]) => {
        response.render('test', { sizes: sizesData, products: productData, configs: configData  });
        console.log(configData);
    }).catch((error) => {
        console.error('Error fetching data:', error);
        response.status(500).send('Internal Server Error');
    });
});

app.post('/', function (request, response) {
    // Currently not handling POST data, redirect to the homepage
    response.redirect(303, '/');
});

app.set('port', process.env.PORT || 2024);

app.listen(app.get('port'), function () {
    console.log(`http://localhost:${app.get('port')}`);
});
