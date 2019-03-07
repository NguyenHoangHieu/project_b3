
const express = require('express');
const bodyParser = require('body-parser');//is midleware la trung giao giua 2 thang
const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set("views", "./views/");


const routersinger = require('./routers/singerApi');

app.use(bodyParser.urlencoded({ extended: false }));//fasle = string || array

app.use('/singer', routersinger);


app.listen(port, function () {
    console.log('running server ' + port);
})

