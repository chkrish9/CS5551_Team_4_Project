var users = require('../modules/users/userrouter');
var lines = require('../modules/users/linerouter');
var reasons = require('../modules/users/reasonsrouter');
var usergroups = require('../modules/users/usergrouprouter');
var login = require('../modules/users/loginrouter');
var area = require('../modules/users/arearouter');

module.exports = function router(app){
    app.use('/users',users);
    app.use('/login',login);
    app.use('/usergroup',usergroups);
    app.use('/area',area);
	  app.use('/line',lines);
    app.use('/reasons',reasons);
};