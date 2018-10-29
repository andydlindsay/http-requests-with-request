var request = require('request');
var fs = require('fs');
var log = console.log;

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', (err) => {
         throw err;
       })
       .on('response', (response) => {
         log('Response Status Code: ', response.statusCode);
         log(`Response Status Message: ${response.statusMessage}`);
         log(`Content Type: ${response.headers['content-type']}`);
         log('Downloading image...');
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', () => {
         log('Download complete.');
       });
