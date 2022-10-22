import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function hanlder(req: NextRequest, event: NextFetchEvent) {
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/((?![^login]))"],
};
