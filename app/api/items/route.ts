import connectDB from "@/app/lib/mongodb";
import Item from "@/app/models/Item";
import { NextResponse } from "next/server";

export async function GET() {
	await connectDB();

	try {
		const items = await Item.find({});
		return NextResponse.json(items);
	} catch (err) {
		return NextResponse.json({
			error: err instanceof Error ? err.message : "An unknown error occurred",
		});
	}
}
