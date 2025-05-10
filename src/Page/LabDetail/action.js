import { createClient } from "@supabase/supabase-js";
export async function detailLabPage(id) {
  const supabase = createClient(
    "https://jkqjspqfaakifrkxfmcv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWpzcHFmYWFraWZya3hmbWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mzk0MDEsImV4cCI6MjA0MDAxNTQwMX0.HdE2O60y6FCh_LjvUcpKQsf4GOSV68hlFbMxb4bY1NE"
  );

  try {
    let query = supabase.from("laboratory").select("*").eq("lab_id", id);
    const { data, error } = await query;
    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.log("Error fetching News: ", error);
    throw error;
  }
}

export async function getLab() {
  const supabase = createClient(
    "https://jkqjspqfaakifrkxfmcv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWpzcHFmYWFraWZya3hmbWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mzk0MDEsImV4cCI6MjA0MDAxNTQwMX0.HdE2O60y6FCh_LjvUcpKQsf4GOSV68hlFbMxb4bY1NE"
  );

  try {
    let query = supabase.from("laboratory").select("*");

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
