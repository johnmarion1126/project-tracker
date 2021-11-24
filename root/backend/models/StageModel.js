import mongoose from 'mongoose';

const StageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    items: [{ 
        id: {
            type: String,
            unique: true,
        },
        title: String,
        items: [{
            id: {
                type: String,
                unique: true
            },
            title: String,
        }]
    }]
});

const Stage = mongoose.model("Stage", StageSchema);

export default Stage;