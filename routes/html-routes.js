
const path = require('path');

module.exports = function (app) {

    //HTML get requests
    app.get('/', function (req, res) {
        console.log("in home route")
        
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    app.get('/dashboard', function(req,res){
        console.log("In dash board")
        res.sendFile(path.join(__dirname, "/../public/dashboard.html" ))
    })

    app.get('/blacklist', function(req,res){
        
        res.sendFile(path.join(__dirname, "/../public/blackList.html" ))
    })
    app.get('/whitelist', function(req,res){
        
        res.sendFile(path.join(__dirname, "/../public/whiteList.html" ))
    })

 
 
};
