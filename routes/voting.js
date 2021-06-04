const express = require('express');
const router = express.Router();
const {asyncHandler} = require('./utils');
const {Question, Answer} = require("../db/models");
const {requireAuth} = require("../auth");

router.patch("/upvote/:id(\\d+)", requireAuth, asyncHandler(async (req, res) => {
    const question = await Question.findByPk(req.params.id);

    question.voteCount += 1;
    question.save({fields: ["voteCount"]});

    res.json(question);
}));

router.patch("/downvote/:id(\\d+)", requireAuth, asyncHandler(async (req, res) => {
    const question = await Question.findByPk(req.params.id);

    question.voteCount -= 1;
    question.save({fields: ["voteCount"]});

    res.json(question);
}));

router.patch("/upvote/answer/:id(\\d+)", requireAuth, asyncHandler(async (req, res) => {
    const answer = await Answer.findByPk(req.params.id);

    answer.voteCount += 1;
    answer.save({fields: ["voteCount"]});

    res.json(answer);
}));

router.patch("/downvote/answer/:id(\\d+)", requireAuth, asyncHandler(async (req, res) => {
    const answer = await Answer.findByPk(req.params.id);

    answer.voteCount -= 1;
    answer.save({fields: ["voteCount"]});

    res.json(answer);
}));

module.exports = router;
