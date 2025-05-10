import { createClient } from "@supabase/supabase-js";
export async function getNews() {
  const supabase = createClient(
    "https://jkqjspqfaakifrkxfmcv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWpzcHFmYWFraWZya3hmbWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mzk0MDEsImV4cCI6MjA0MDAxNTQwMX0.HdE2O60y6FCh_LjvUcpKQsf4GOSV68hlFbMxb4bY1NE"
  );

  try {
    let query = supabase
      .from("article")
      .select("*")
      .eq("isPublished", "true")
      .order("createAt", { ascending: false });
    const { data, error } = await query;
    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log("Error fetching News: ", error);
    throw error;
  }
}

export async function fullNews(id) {
  const supabase = createClient(
    "https://jkqjspqfaakifrkxfmcv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWpzcHFmYWFraWZya3hmbWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mzk0MDEsImV4cCI6MjA0MDAxNTQwMX0.HdE2O60y6FCh_LjvUcpKQsf4GOSV68hlFbMxb4bY1NE"
  );

  try {
    let query = supabase.from("article").select("*").eq("news_id", id);
    const { data, error } = await query;
    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log("Error fetching News: ", error);
    throw error;
  }
}
