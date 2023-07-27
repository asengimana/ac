import { NextResponse } from "next/server";

import drinksData from "../../data/drinks.json";

export async function GET(req) {
  return NextResponse.json(drinksData);
}
