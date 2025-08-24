import connectDB from "@/app/lib/mongodb";
import Items from "@/app/models/Item";
import { NextResponse } from "next/server";

export async function GET() {
	await connectDB();

	try {
		const items = await Items.find({});
		return NextResponse.json(items);
	} catch (err) {
		return NextResponse.json({ 
			error: err instanceof Error ? err.message : "An unknown error occurred" 
		});
	}

	// return new Response(
	// 	JSON.stringify({ result: `You searched for: ${query}` }),
	// 	{
	// 		headers: { "Content-Type": "application/json" },
	// 	}
	// );
}
