import mongoose, { Schema } from "mongoose";
import { Building, Location } from "../types/mongoose";

const BuildingSchema = new Schema<Building>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    characters: { type: [Schema.Types.ObjectId], ref: "Character" },
  },
  { _id: false }
);

const LocationSchema = new Schema<Location>({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  characters: { type: [Schema.Types.ObjectId], ref: "Character" },
  buildings: { type: [BuildingSchema] },
  status: {
    type: String,
    enum: ["visited", "heard_about", "unknown"],
    required: true,
  },
  additional_notes: {
    type: [
      {
        session: { type: String, required: true, trim: true },
        discovery: { type: String, required: true },
      },
    ],
    default: [],
  },
  draft: Boolean,
});

export default mongoose.models.Location ||
  mongoose.model<Location>("Location", LocationSchema);
