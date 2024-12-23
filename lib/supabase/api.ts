import { supabase } from './client';
import type { Database } from './types';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Course = Database['public']['Tables']['courses']['Row'];

export async function createProfile(profile: Omit<Profile, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([profile])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProfile(id: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createCourse(course: Omit<Course, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('courses')
    .insert([course])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateCourse(id: string, updates: Partial<Course>) {
  const { data, error } = await supabase
    .from('courses')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}