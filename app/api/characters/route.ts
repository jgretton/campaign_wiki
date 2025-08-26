import connectDB from "@/app/lib/mongodb";
import Character from "@/app/models/Character";
import { Character as CharacterType } from "@/app/types/mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const view = searchParams.get("view");
	await connectDB();

	try {
		let characters;
		if (view === "dm")
			characters = await Character.find(
				{},
				"public.name public.location public.status draft"
			);
		else
			characters = await Character.find(
				{ draft: false },
				"public.name public.location public.status"
			);
		return NextResponse.json(characters);
	} catch (err) {
		return NextResponse.json({
			error: err instanceof Error ? err.message : "An unknown error occured",
		});
	}
}
