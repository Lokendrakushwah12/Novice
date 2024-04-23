import { Schema, model, models } from "mongoose";

export interface DocumentCategory extends Document {
    _id: string;
    name: string;
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Category = models.Category || model('Category', CategorySchema);