var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('I am a ninja');
});

app.get('/nickname', function(request, response){
    response.send('exuberant-butterfly');
});


app.listen(process.env.PORT || 4000);