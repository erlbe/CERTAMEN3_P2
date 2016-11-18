/**
 * Created by Erlend on 18.11.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serieSchema = new Schema({
    title: {type: String}
});

module.exports = mongoose.model('Serie', serieSchema);