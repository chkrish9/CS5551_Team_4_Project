const express = require('express');
const router = express.Router();
const passport = require('passport');
const Document = require('../../models/machine/document');

//Get
router.get('/all',passport.authenticate('jwt',{session : false}),  (req, res, next) => {
    Doucment.getDocuments((err, data) => {
        res.json(data);
    });
});

router.get('/get/:name',passport.authenticate('jwt',{session : false}),  (req, res, next) => {
    var name = req.params.name;
    Document.getDocumentNames(name,(err, data) => {
        res.json(data);
    });
});

//Create
router.post('/create',passport.authenticate('jwt',{session : false}),  (req, res, next) =>{
    let newDocument = new Document({
        name : req.body.name,
        description : req.body.description
    });
    Document.addDocument(newDocument, (err, document) =>{
        if(err){
            res.json({success : false, msg : "Failed to Add user."});
        }else{
            res.json({success : true, msg : "User Added."});
        }
    });
});

//Update
router.put('/update/:id',passport.authenticate('jwt',{session : false}),  function (req, res,next) {
    //console.log( req.body);
    var id = req.params.id;
    var update = { 
        name : req.body.name,
        description : req.body.description
    };
    Document.updateDocument(id, update, (err, document) => {
         if (err) {
            res.json({ msg: 'Failed while updating contact', status: 'error' });
        } else {
            res.json({ msg: 'new contact added successfully' });
        }
    });
});

//Delete
router.delete('/delete/:id',passport.authenticate('jwt',{session : false}),  (req, res, next) => {
    Document.deleteDocument(req.params.id,(err, result) => {
        if (err) {
            res.json({ msg: 'Failed while deleting contact', status: 'error',success:false });
        } else {
            res.json({ msg: 'new contact added successfully' });
        }
    })
});

module.exports = router;