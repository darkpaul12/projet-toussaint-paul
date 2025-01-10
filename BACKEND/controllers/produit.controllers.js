const db = require("../models");
const Produit = db.produit;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    console.log ("findAll")

    Produit.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la récupération de Utilisateur."
            });
        });
};