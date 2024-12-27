import { createClient } from '@supabase/supabase-js';
import { Database } from './types';
import { supabaseConfig } from './config';

export const supabase = createClient<Database>(
  supabaseConfig.url,
  supabaseConfig.anonKey
);