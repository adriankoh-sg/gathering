/**
 * Create a sample login route where it handles GET requests.
 * Will decide later to implement using Firebase or Supabase.
 */
import { NextRequest, NextResponse } from "next/server";

// GET request handler
export async function GET(request: NextRequest) {
  console.log(request, request.nextUrl.searchParams);
  return new NextResponse("Hello from the login route");
}
