const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Machine schema
const MachineModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    machinegroup: {
        type: Schema.Types.ObjectId,
        ref: 'MachineGroupModel'
    },
    company: {
        type: String
    },
    model: {
        type: String
    },
    dateOfInstall: {
        type: String
    },
    qrCode: {
        type: String
    },
    area: {
        type: Schema.Types.ObjectId,
        ref: 'AreaModel'
    },
    line: {
        type: Schema.Types.ObjectId,
        ref: 'LineModel'
    },
    barcode: {
        type: String
    },
});

const Machine = module.exports = mongoose.model('MachineModel', MachineModel);

module.exports.getMachineById = function (id, callback) {
    Machine.findById(id, callback);
}

module.exports.addMachine = function (newMachine, callback) {
    console.log(newMachine);
    newMachine.save(callback);
}

module.exports.updateMachine = function (id, updateQuery, callback) {
    Machine.findByIdAndUpdate(id, { $set: updateQuery }, callback);
}

module.exports.deleteMachine = function (id, callback) {
    Machine.remove({ _id: id }, callback);
}

module.exports.getMachines = function (callback) {
    Machine.find().exec(callback);
}

module.exports.getMachineNames = function(name,callback){
    console.log(name);
    Machine.find({ "name": { $regex: '.*' + name + '.*' }}, callback);
}