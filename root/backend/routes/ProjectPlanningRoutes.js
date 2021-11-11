import express from 'express';
import stageModel from '../models/StageModel.js';

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.post("/add_stage_array", async (req, res) => {
    const stage = new stageModel(req.body);

    try {
        await stage.save();
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/get_stage_array", async (req, res) => {
    const stage = await stageModel.find(req.query);

    try {
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

// TODO: Update this code
app.put("/update_stage_array", async (req, res) => {
    const stage = await stageModel.updateOne({
        name: 'Test',
        items: [{
            id: '4',
            title: "updated"
        }]
    });

    try {
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

// TODO: Allow removal of data from database

export default app;