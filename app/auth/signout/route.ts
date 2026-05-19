import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { SUPABASE_CONFIGURED } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (SUPABASE_CONFIGURED) {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch {
      /* noop */
    }
  }
  return NextResponse.redirect(new URL("/", req.url));
}
