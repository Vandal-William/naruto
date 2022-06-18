const { Router } = require('express');
const homePageController = require('./controllers/homePageController');
const charactersControllers = require('./controllers/charactersControllers');

const router = Router();

router.get('/', homePageController.renderHomePage);
router.get('/characters', charactersControllers.renderPageCharactersList);


module.exports = router; 