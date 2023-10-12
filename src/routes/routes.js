const homePage = require('../views/pages/home');
const playPage = require('../views/pages/play');
const rulesPage = require('../views/pages/rules');
const aboutPage = require('../views/pages/about');

const routes = {
  '/': homePage,
  '/home': homePage,
  '/play': playPage,
  '/rules': rulesPage,
  '/about': aboutPage,
};

module.exports = routes;
