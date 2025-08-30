import mongoose, { Schema } from "mongoose";
import { Character, Stat, Stats, PROFESSION, STATUS } from "../types/mongoose";
const StatSchema = new Schema<Stat>(
  {
    value: { type: Number, required: true },
    modifier: { type: Number, required: true },
    save: { type: Number, required: true },
  },
  { _id: false }
);

const StatsSchema = new Schema<Stats>(
  {
    ac: { type: Number, required: true },
    speed: { type: Number, required: true },
    hp: { type: Number, required: true },
    cr: { type: Number, required: true, min: 0, max: 30 },

    con: StatSchema,
    str: StatSchema,
    dex: StatSchema,
    int: StatSchema,
    wis: StatSchema,
    cha: StatSchema,

    traits: {
      type: [
        {
          title: { type: String, required: true },
          description: { type: String, required: true },
        },
      ],
      default: [],
    },
    actions: {
      type: [
        {
          title: { type: String, required: true },
          description: { type: String, required: true },
        },
      ],
      default: [],
    },
  },
  { _id: false }
);

const CharacterSchema = new Schema<Character>({
  public: {
    name: { type: String, required: true, trim: true },
    age: { type: Schema.Types.Mixed, required: true },
    appearance: { type: String, required: true },
    description: { type: String, required: true },
    additional_notes: {
      type: [
        {
          session: { type: String, required: true, trim: true },
          discovery: { type: String, required: true },
        },
      ],
      default: [],
    },
    related_characters: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "Character",
    },
    languages: { type: [String], default: [] },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location"
    },
    profession: {
      type: String,
      enum: Object.values(PROFESSION),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(STATUS),
      required: true,
    },
  },
  dm: {
    immunities: { type: [String], default: [] },
    alignment: { type: String, required: true },
    stats: { type: StatsSchema, required: true },
  },
  draft: { type: Boolean, default: true },
});

export default mongoose.models.Character ||
  mongoose.model<Character>("Character", CharacterSchema);
