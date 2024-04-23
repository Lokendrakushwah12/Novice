import { Schema, model, models } from "mongoose";

export interface ResourceDocument extends Document {
    _id: string;
    name: string;
    description: string;
    imageURL: string;
    createdAt: Date;
    url: string;
    category: {_id: string, name: string};
}

const resourceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageURL: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Resource = models.Resource || model('Resource', resourceSchema);

export default Resource;