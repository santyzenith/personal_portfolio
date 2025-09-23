import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Crear cliente de Supabase usando las env vars
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Solo en el servidor
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, message } = body;

    // Insertar en la tabla "contacts"
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ username, email, message }]);

    if (error) {
      console.error("Supabase error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Server error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
