import { Document } from "mongoose";

export interface Item extends Document {
	name: string;
	description?: string;
	type?: ITEM_TYPE;
	cost?: number;
	weight?: number;
}

export enum ITEM_TYPE {
	Item = "Item",
	Armour = "Armour",
	Weapon = "Weapon",
}
