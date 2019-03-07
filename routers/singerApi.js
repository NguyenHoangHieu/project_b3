const express = require('express');
const router = express.Router();


const { Singer, arrSinger, domain, domainImg } = require('../models/singer.js');


router.get('/', function (req, res) {
    res.render('list', { Singer, arrSinger, domain, domainImg });
})

router.get('/add', function (req, res) {
    res.render('add');
})

router.post('/add-singer', function (req, res) {
    const { txtName, txtAvata, txtLink } = req.body;
    const id = Math.floor(Math.random() * 100000);
    const sger = new Singer(id, txtName, txtAvata, txtLink);
    arrSinger.push(sger);
    res.redirect('/singer');
})

router.get('/delete/:id', function (req, res) {
    const deleteElement = req.params.id;
    for (let i = 0; i < arrSinger.length; i++) {
        if (arrSinger[i].id == deleteElement) {
            arrSinger.splice(i, 1);
        }
    }
    res.redirect('/singer');
})

router.get('/edit/:id', function (req, res) {
    const id = req.params.id;
    // var g = new Singer();
    // g = arrSinger.filter(x => x.id == id);
    res.render('edit', { Singer, arrSinger, id });
    //res.send({Singer1});
})

router.post('/edit-singer', function (req, res) {
    const { txtId, txtName, txtAvata, txtLink } = req.body;
    for (let i = 0; i < arrSinger.length; i++) {
        if (arrSinger[i].id == txtId) {
            arrSinger[i].name = txtName;
            arrSinger[i].avata = txtAvata;
            arrSinger[i].link = txtLink;
        }
    }
    res.redirect('/singer');
})

module.exports = router;