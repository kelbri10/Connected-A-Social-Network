"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const user_model_1 = __importDefault(require("../model/user.model"));
const router = express.Router();
// POST method for adding new users to app
router.post('/api/user', (req, res) => {
    let newUser = user_model_1.default.create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        location: req.body.location
    });
    newUser.then(addedUser => {
        console.log(addedUser);
    }).catch(err => console.log(err));
});
module.exports = router;
