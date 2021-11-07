import express from 'express';
import stageModel from '../models/StageModel.js';

const app = express();

app.post("/add_stage", async (req, res) => {
    const stage = new stageModel(req.body);

    try {
        await stage.save();
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default app;