import { Document, Types } from "mongoose";
// Items
export interface Item extends Document {
	name: string;
	description: string;
	type: ITEM_TYPE;
	cost?: number;
	weight?: number;
}

export enum ITEM_TYPE {
	Item = "Item",
	Armour = "Armour",
	Weapon = "Weapon",
}

//Characters
export interface Character extends Document {
	public: {
		name: string;
		age: string | number;
		appearance: string;
		description: string; // History and information about the character
		additional_notes: Additional_Notes[]; // this is more for session update (eg. Session 3 - players find out X was part of the Watchers cult)
		related_characters: string[]; //array of character ids
		languages: string[];
		location: string; // location id
		profession: PROFESSION;
		status: STATUS;
	};
	dm: {
		immunities: string[];
		stats: Stats;
		alignment: string;
	};
	draft: boolean; // so i can create them but they wont be seen publically
}

export interface Stats {
	ac: number; //armour class
	speed: number;
	hp: number; //hit points
	cr: number; //challenge rating

	con: Stat;
	str: Stat;
	dex: Stat;
	int: Stat;
	wis: Stat;
	cha: Stat;

	traits: Additional_Info[];
	actions: Additional_Info[];
}

export interface Stat {
	value: number;
	modifier: number;
	save: number;
}

export interface Additional_Info {
	title: string;
	description: string;
}

export interface Additional_Notes {
	session: string;
	discovery: string;
}

export enum PROFESSION {
	Merchant = "merchant",
	Guard = "guard",
	Noble = "noble",
	Clergy = "clergy",
	Criminal = "criminal",
	Other = "other",
}

export enum STATUS {
	Met = "met",
	Heard_About = "heard_about",
	Unknown = "unknown",
}

//Locations
export interface Location extends Document {
	name: string;
	description: string;
	characters: Types.ObjectId[];
	buildings: Building[];
	status: "visited" | "heard_about";
	additional_notes: Additional_Notes[];
	draft: boolean;
}

export interface Building {
	name: string;
	description: string;
	characters?: string[];
}
