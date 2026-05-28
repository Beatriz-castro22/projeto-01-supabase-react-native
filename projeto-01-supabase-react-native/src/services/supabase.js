import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'lidwtifasqupmbhdnock'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZHd0aWZhc3F1cG1iaGRub2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NTQyNjIsImV4cCI6MjA5NTUzMDI2Mn0.kyDjQBVfj-h7VoUNvddwexzARjaAgob0uP1KHgL4O0E'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)