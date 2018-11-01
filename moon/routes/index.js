var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('moon.html', { root: 'public' });
});

router.get('/getMoon', function(req, res, next) { //Dat&location
    var url = "http://api.usno.navy.mil/rstt/oneday?date=";
    console.log("REQ: " + req);
    console.log("query ", req.query);
    url += req.query['q'];
    url += "&loc=";
    url += req.query['loc'];
    console.log("URL: " + url);
    request(url).pipe(res);
});

//https://api.aerisapi.com/sunmoon/moonphases/burke,va?client_id=Fw9aMpcBNd2NsOomuU2qn&client_secret=9HHCVnQtpYWgaIl32T7kJHudrlwAwylrUrvv1zw5
// http://api.usno.navy.mil/moon/phase?date=10/31/2018&nump=2
module.exports = router;
