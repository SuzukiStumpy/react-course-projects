import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ffuvmnqaegcbczgefjcb.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdXZtbnFhZWdjYmN6Z2VmamNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1Njc1OTMsImV4cCI6MjAyMDE0MzU5M30.IyBdqw5jLdlKs8ppPxTNjO0Cj7jEjkpS3aSnuSuW4HM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
