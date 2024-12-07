
const express = require('express');

const morgan = require('morgan');

require('dotenv').config();
require('./libs/dbConnect');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get('/', (req, res) => {
res.render('index',{message: 'Hello From Node.js'});
});
app.get('/contact', (req, res) => {
    res.render('index',{message: 'THe Contact Page'});
});

app.get('/about',(req, res) => {
    res.render('index',{message: 'The About Page'})
});

app.get('*', (req, res) => {
    res.status(404).render('index',{message: 'Not Found'});
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





/*const http = require('http');

const { url } = require('inspector');
const server = http.createServer((req, res) => {
const {url} = req;
console.log(url);
if(url === '/') {
    res.end('Hello my name is duval');
    }else if (url === '/contact') {
    res.end('The contact Page');

    }else if (url === '/about'){
        res.end('The About Page');
    }else {
        res.writeHead(404)
        res.end('Not Found');
    }
});
server.listen(3000,() => {
    console.log('Server running on port 3000');
})
    */