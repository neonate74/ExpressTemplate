var express = require('express');
var router = express.Router();

const {OAuth2Client} = require('google-auth-library');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const opn = require('opn');

const keys = require('../node_for_ripple.json');


/* GET users listing. */
router.get('/', function(req, res, next) {
    try {
        const oAuth2Client = new OAuth2Client (
            keys.web.client_id,
            keys.web.client_secret,
            keys.web.redirect_uris[0],
        );
        
        const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/plus.me'
        });

        res.redirect(authorizeUrl);

    } catch (e) {
        console.error(e);
    }

    res.render('googleauth', { title: 'google auth' });
});

module.exports = router;
