
const express = require('express');
const bodyParser = require('body-parser');//is midleware la trung giao giua 2 thang
const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set("views", "./views/");


const { Singer, arrSinger, domain, domainImg } = require('./models/singer.js');

app.use(bodyParser.urlencoded({ extended: false }));//fasle = string || array

app.get('/list', function (req, res) {
    res.render('list.ejs', { Singer, arrSinger, domain, domainImg });
})

app.get('/add', function (req, res) {
    res.render('add.ejs');
})


app.post('/add-singer', function (req, res) {
    const { txtName, txtAvata, txtLink } = req.body;
    // res.send({
    //     txtName, txtAvata, txtLink
    // });
    const id = Math.floor(Math.random() * 100000);
    const sger = new Singer(id, txtName, txtAvata, txtLink);
    arrSinger.push(sger);
    res.redirect('/list');
})

app.get('/delete/:id', function (req, res) {
    const deleteElement = req.params.id;
    for (let i = 0; i < arrSinger.length; i++) {
        if (arrSinger[i].id == deleteElement) {
            arrSinger.splice(i, 1);
        }
    }
    res.redirect('/list');
})

app.listen(port, function () {
    console.log('running server ' + port);
})
