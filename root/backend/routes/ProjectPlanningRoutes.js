import express from 'express';
import stageModel from '../models/StageModel.js';

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

// FEATURE GOALS

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

app.get("/get_feature_goal", async (req, res) => {
    const stage = await stageModel.find(
        { name: req.query.name },
        { items: {
                $elemMatch: { title: req.query.title }
            }
        }
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

// WORK ITEMS

app.put("/update_feature_items", async (req, res) => {
    const stage = await stageModel.updateOne(
        { name: req.body.name, "items.title": req.body.title },
        { $push: { "items.$.items": { title: req.body.itemTitle }}}
    );

    try {
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete("/delete_feature_item", async (req, res) => {
    const stage = await stageModel.updateOne(
        { name: req.body.name, "items.title": req.body.title },
        { $pull: { "items.$.items": { title: req.body.itemTitle }}}
    )

    try {
        res.send(stage);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default app;