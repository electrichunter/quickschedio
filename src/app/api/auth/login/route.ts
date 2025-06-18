import { supabase } from "../../info/supabase";  
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return NextResponse.json({ error: error?.message || "Giriş başarısız" }, { status: 401 });
  }

  // Token'ı cookie olarak ayarlayalım (isteğe bağlı)
  const res = NextResponse.json({ user: data.user, token: data.session.access_token });
  res.cookies.set("access_token", data.session.access_token, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60,
  });

  return res;
}
