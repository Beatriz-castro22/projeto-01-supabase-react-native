import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'SUA_URL'
const SUPABASE_ANON_KEY = 'SUA_CHAVE'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)