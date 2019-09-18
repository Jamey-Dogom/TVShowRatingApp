const express = require('express');
const app = express();

require('./server/config/mongoose')

app.use(express.json());

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({
    extended: true
}));

require('./server/config/routes')(app)

app.listen(3333, () => console.log('shows running on 3333'));