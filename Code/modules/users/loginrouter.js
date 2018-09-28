const express = require('express');
const router = express.Router();
const User = require('../../models/user/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');

//Authenticate
router.post('/authenticate', (req, res, next) =>{
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username, (err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success : false, msg : "User not found"});
        }

        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn : 604800 //1week
                });
                res.json({
                    success : true,
                    token : 'JWT '+token,
                    user : {
                        id : user._id,
                        username : user.username,
                    }
                });
            }else{
                return res.json({success : false, msg : "Wrong Password"});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt',{session : false}), (req, res, next) =>{
    res.json({user : req.user});
});

module.exports = router;