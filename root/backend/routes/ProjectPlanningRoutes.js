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

app.put("/update_stage_array", async (req, res) => {
    const stage = await stageModel.updateOne(
        { name: req.body.name },
        { $push: { "items": req.body.item }}
        
    );

    try {
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete("/delete_item", async (req, res) => {
    const stage = await stageModel.updateOne(
        { name: req.body.name },
        { $pull: { "items": { id: req.body.id }}}
    )

    try {
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

// TODO: Create model for work items
// TODO: Add code to get and delete work items

export default app;