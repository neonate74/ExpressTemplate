var express = require('express');
var router = express.Router();

const {OAuth2Client} = require('google-auth-library');

const keys = require('../node_for_ripple.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    try {
        const oAuth2Client = new OAuth2Client (
            keys.web.client_id,
            keys.web.client_secret,
            keys.web.redirect_uris[0],
        );

        // Make a simple request to the Google Plus API using our pre-authenticated client. The `request()` method
        // takes an AxiosRequestConfig object.  Visit https://github.com/axios/axios#request-config.
        const url = 'https://www.googleapis.com/oauth2/v2/userinfo';
        const res = oAuth2Client.request({url});

        console.log("res.data : " + res.data);

        res.render('oauth2callback', { title: 'Express oauth2callback' });

    } catch (e) {
        console.error(e);
    }

    res.render('googleauth', { title: 'google auth' });
});

module.exports = router;
