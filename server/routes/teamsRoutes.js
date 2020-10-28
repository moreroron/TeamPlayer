const express = require('express');
const router = express.Router();
const baseURL = 'https://api.football-data.org/v2';
const token = '3c9c206578d141ae8483bd451daa819e'; // on a real app needs to be in a config file
const { fetchFromApi } = require('../utiles');

router.get('/', async (req, res) => {
  const { data, error } = await fetchFromApi(`${baseURL}/competitions/2001/teams`, token);
  if (data) {
    res.json(data);
  } else if (error) {
    res.status(error.status).json(error.message);
  }
});

router.get('/:teamId', async (req, res) => {
  const { data, error } = await fetchFromApi(`${baseURL}/teams/${req.params.teamId}`, token);
  if (data) {
    res.json(data);
  } else if (error) {
    res.status(error.status).json(error.message);
  }
});

module.exports = router;
