const db = require('../database/client');

const charactersControllers = {

    renderPageCharactersList(req, res){

        db.query('SELECT * FROM personnage ORDER BY id ASC')
          .then(results =>{
            const charactersList = results.rows;
            res.render('allCharactersList', {charactersList});
          })
          .catch(error => {
            res.status(500).render('500', {error});
          });
    }

}

module.exports = charactersControllers;