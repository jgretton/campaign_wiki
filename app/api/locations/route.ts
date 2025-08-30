import connectDB from "@/app/lib/mongodb";
import Location from "@/app/models/Location";
import { NextResponse } from "next/server";
export async function GET() {
  await connectDB();

  try {
    const locations = await Location.find()
      .populate("characters", "public.name")
      .populate("buildings.characters", "public.name");
    return NextResponse.json(locations);
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Error ? err.message : "An unknown error occured",
    });
  }
}
