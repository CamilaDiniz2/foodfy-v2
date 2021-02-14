const express = require('express');
const routes = express.Router();

const recipes = require('./app/controllers/recipes');

routes.get('/', (req, res) => {
  return res.render('home/home');
});

routes.get('/sobre', (req, res) => {
  return res.render('home/about');
});

routes.get('/recipes', (req, res) => {
  return res.render('home/recipes');
});

//routes.get('/admin/recipes', recipes.index); // Mostrar a lista de receitas
routes.get('/admin/recipes/create', recipes.create); // Mostrar formulário de nova receita
routes.post('/admin/recipes', recipes.post); // Cadastrar nova receita
// routes.get('/admin/recipes/:id', recipes.show); // Exibir detalhes de uma receita
// routes.get('/admin/recipes/:id/edit', recipes.edit); // Mostrar formulário de edição de receita

// routes.put('/admin/recipes', recipes.put); // Editar uma receita
// routes.delete('/admin/recipes', recipes.delete); // Deletar uma receita

// server.get('/chefs', (req, res) => {
//   return res.render('chefs);
// });

routes.use(function (req, res) {
  res.status(404).render('not-found');
});

module.exports = routes;
