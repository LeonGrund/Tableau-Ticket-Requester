var request = require('request');

console.log("Test App")

request.post(
    'https://<SERVERNAME>/trusted',
    { forms: { username: '<USERNAME>', server: 'https://<SERVERNAME>/trusted', client_ip: '', target_site: ''} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Response Body:")
            console.log(body)
        }
        if (error){
            console.log("Some Error")
        }
    }
);