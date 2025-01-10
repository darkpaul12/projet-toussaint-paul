const { checkJwt}  = require('./jwtMiddleware');
const produit = require("../controllers/produit.controllers");

module.exports = app => {
    const utilisateur = require("../controllers/utilisateur.controllers.js");

    var router = require("express").Router();

    router.post("/login", utilisateur.login);
    router.post("/accountcreation", utilisateur.accountcreation)

    app.use('/api/utilisateur', router);
  };
