
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzkbjntyenatajwntudj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6a2JqbnR5ZW5hdGFqd250dWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MzU3NDQsImV4cCI6MjAyODQxMTc0NH0.ZlNJY2l5Cn0jXStY3A_0DiDve_ZgAiQvYE7mqbT_mJU";

export const supabase = createClient(supabaseUrl, supabaseKey);
        