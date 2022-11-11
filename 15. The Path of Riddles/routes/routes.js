import express from 'express';
import * as riddlesModel from '../models/models.js';

export const riddlesRouter = express.Router();

riddlesRouter.get('/r', async function(req, res) {
    const randomRiddle = await riddlesModel.getRandomRiddle();
    res.json({
        payload: randomRiddle,
    })
})