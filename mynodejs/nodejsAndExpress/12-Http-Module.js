 const http = require('http');

 const errorTemplate = `
                <h1>Oops!</h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href="/">Back home</a>
                `;
 const server = http.createServer( (req, res) => {
    console.log('url = ', req.url);
    if(req.url === '/') {
         //res.write('Welcome to our home page');
         res.end('Welcome to our home page !!!');
    }
    else if(req.url === '/about') {
        //res.write('Welcome to our home page');
        res.end('Welcome to our about page');
    }
    else {
        res.end(errorTemplate); 
    }
 });

 server.listen(3000, () => {
     console.log('Server is listening on port 3000...');
 });