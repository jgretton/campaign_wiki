// Checking to see if object id is a valid id. If not then return not found. If true, then check databse, return not found if character does not exist.

// return if exists

//need to add ?view=dm check and return full data or partial data.

import connectDB from "@/app/lib/mongodb";
import Character from "@/app/models/Character";
import { Types } from "mongoose";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const paramId = (await params).id;
	const isValidId = Types.ObjectId.isValid(paramId);
	// if (!isValidId) return notFound();
	let id;
	try {
		id = new Types.ObjectId(`${paramId}`);
	} catch (err) {
		return NextResponse.json({
			error: err instanceof Error ? err.message : "fucked",
		});
	}
	await connectDB();

	try {
		const character = await Character.findById(id);
		return NextResponse.json(character);
	} catch (err) {
		return NextResponse.json({
			error: err instanceof Error ? err.message : "An unknown error occured",
		});
	}
}
