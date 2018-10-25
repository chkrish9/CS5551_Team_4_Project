const mongoose = require('mongoose');

//Import schema
const ImportModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Import = module.exports = mongoose.model('ImportModel', ImportModel);

module.exports.getImportById = function (id, callback) {
    Import.findById(id, callback);
}

module.exports.addImport = function (newImport, callback) {
    //console.log(newLine);
    newLine.save(callback);
}

module.exports.updateImport = function (id, updateQuery, callback) {
    Import.findByIdAndUpdate(id, { $set: updateQuery }, callback);
}

