/**
 * Created by Erlend on 18.11.2016.
 */
var express = require('express');
var router= express.Router();

var Serie = require('../models/serie');

module.exports = router;

router.get('/', function(req, res) {
    res.send("Hello world, welcome to this series API");
});

router.post('/', function(req, res, next){
    console.log(req.body);
    var serie = new Serie();
    serie.title = req.body.title;

    // Save this serie
    serie.save(function(err) {
        if (err) res.send(err);

        // Return all series
        Serie.find({}, function(err, series){
            res.send(series);
        })
    });

});