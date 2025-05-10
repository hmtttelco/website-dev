import { createClient } from "@supabase/supabase-js";

export async function getNews() {
  const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_ANON_KEY
  );

  try {
    let query = supabase.from("newsroom").select("*");

    const { data } = await query;
    return data;
  } catch (error) {
    console.log(error);
  }
}
