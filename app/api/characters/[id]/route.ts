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
  const paramId = await params.id;
  const isValidId = Types.ObjectId.isValid(paramId);
  if (!isValidId) { console.log('This is an invalid id'); return NextResponse.json({ error: "Not Found" }, { status: 404 }) }

  // check if view=dm
  const view = request.nextUrl.searchParams.get("view");
  await connectDB();

  try {
    let character;
    if (view === "dm") {
      character = await Character.findById(paramId);

    } else {
      character = await Character.findById(paramId, "public").where({ draft: false }).populate('public.related_characters', "public.name").populate('public.location')

    }
    if (!character) {
      console.log("This character does not exists"); return NextResponse.json({ error: "Not Found" }, { status: 404 })
    }
    return NextResponse.json(character);
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Error ? err.message : "An unknown error occured",
    });
  }
}
