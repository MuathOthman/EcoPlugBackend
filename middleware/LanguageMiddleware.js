const session = require('express-session');
const express = require('express');

const LanguageMiddleware = (app) => {
    app.use(express.json());

    app.use(session({
        secret: "..........",
        resave: false,
        saveUninitialized: true
    }));


    app.use((req, res, next) => {
        console.log("Printing language from middleware:" + req.params.language);
        if (req.session.language === 'en') {
            res.locals.language = 'en';
        } else if (req.session.language === 'fi') {
            res.locals.language = 'fi';
        } else if (req.session.language === 'ar') {
            res.locals.language = 'ar';
        } else {
            res.locals.language = 'en';
        }
        next();
    });
}


module.exports = LanguageMiddleware;