const express = require('express');
const router = express.Router();
const {asyncHandler} = require('./utils');
const {Question} = require("../db/models");

/* GET home page. */
//Render 5 most recently asked question
router.get('/', asyncHandler(async function(req, res, next) {
  const questions = await Question.findAll({
    order: [["question", "DESC"]],
    limit: 5
  });

  res.render('index', { questions, title: 'MedFlowClinic Homepage' });
}));

module.exports = router;
