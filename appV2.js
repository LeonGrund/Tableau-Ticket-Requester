var request = require('request');
var querystring = require('querystring');

console.log("Test App")

var form = {
    username: '<USERNAME>',
    server: 'https://<SERVERNAME>/trusted',
    client_ip: '',
    target_site: ''
};

var formData = querystring.stringify(form);
var contentLength = formData.length;

request({
    headers: {
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://<SERVERNAME>/trusted',
    body: formData,
    method: 'POST',
    mode: 'no-cors'
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("Response Body:")
        console.log(body)
        }
    if (error){
        console.log("Some Error")
        }
    }
);