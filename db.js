var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/HR_MVP');
var Schema = mongoose.Schema;

var youVsSchema = new Schema({
  income: 'string'
});

var youVsModel = mongoose.model('youVsModel', youVsSchema);

module.exports = youVsModel;
