var request = require('request');
var querystring = require('querystring');

//var express = require('express');

//Notes
//URL parameters: request.param.variable_name
//POST parameters: request.body.varable_name
//Response URL: response.headers['location']
/*
request({
            uri: 'http://google.com',
            method: 'GET',
            mode: 'no-cors'
        }, function(error, response, html) {
            return console.log(html);
        });*/

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
    followAllRedirects: true,
    mode: 'no-cors'
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        if (body == -1) {
            console.log("Code: -1");
            console.log(body);     request('https://google.com', function(error, response, html) {
                return console.log(html);
            });
        }
        else{
            console.log("Body:");
            return console.log(body);
        }
    }
    if (error){
        console.log("Some Error");
        return console.log(error);
    }
});