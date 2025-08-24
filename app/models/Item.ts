import mongoose, { Schema } from "mongoose";
import { Item, ITEM_TYPE } from "../types/mongoose";

const ItemSchema = new Schema<Item>({
	name: { type: String, required: true },
	description: { type: String, required: false },
	type: { type: String, enum: Object.values(ITEM_TYPE) },
	cost: { type: Number, required: false },
	weight: { type: Number, required: false },
});

export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
