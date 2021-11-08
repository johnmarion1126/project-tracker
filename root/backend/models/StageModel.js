import mongoose from 'mongoose';

const StageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    items: [{ 
        id: String,
        title: String,
    }]
});

const Stage = mongoose.model("Stage", StageSchema);

export default Stage;