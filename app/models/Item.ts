import mongoose, { Schema } from "mongoose";
import { Item, ITEM_TYPE } from "../types/mongoose";

const ItemSchema = new Schema<Item>({
	name: { type: String, required: true, trim: true },
	description: { type: String, required: true },
	type: { type: String, enum: Object.values(ITEM_TYPE), required: true },
	cost: Number,
	weight: Number,
});

export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
