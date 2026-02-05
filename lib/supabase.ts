import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.https://ofgwagwjiqfagiufwwys.supabase.co!;
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ3dhZ3dqaXFmYWdpdWZ3d3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyNTY0MzcsImV4cCI6MjA4NTgzMjQzN30.t85IXaUbaUZV1NdczAKl22g4L9wqe6b6X-PjaLVIVtA!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);