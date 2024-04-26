import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wtdpefuyntykvsrqfygu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0ZHBlZnV5bnR5a3ZzcnFmeWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MDE2MTIsImV4cCI6MjAyOTQ3NzYxMn0.faQV3W2E4cwI6tX73ZQfCVuXfWpnjZEMmUUs2ldIeDM";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or API key is not provided");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
