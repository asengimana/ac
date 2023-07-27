import { NextResponse } from "next/server";

import categoriesData from "../../data/categories.json";

export async function GET(req) {
  return NextResponse.json(categoriesData);
}
