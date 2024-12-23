export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          expertise_level: 'beginner' | 'intermediate' | 'expert' | null
          preferred_language: string
          bio: string | null
          company: string | null
          job_title: string | null
          is_mentor: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          expertise_level?: 'beginner' | 'intermediate' | 'expert' | null
          preferred_language?: string
          bio?: string | null
          company?: string | null
          job_title?: string | null
          is_mentor?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          expertise_level?: 'beginner' | 'intermediate' | 'expert' | null
          preferred_language?: string
          bio?: string | null
          company?: string | null
          job_title?: string | null
          is_mentor?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          level: 'intro' | 'intermediate' | 'expert'
          price: number
          language: string
          instructor_id: string | null
          is_live: boolean
          max_students: number | null
          duration_minutes: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          level: 'intro' | 'intermediate' | 'expert'
          price: number
          language?: string
          instructor_id?: string | null
          is_live?: boolean
          max_students?: number | null
          duration_minutes?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          level?: 'intro' | 'intermediate' | 'expert'
          price?: number
          language?: string
          instructor_id?: string | null
          is_live?: boolean
          max_students?: number | null
          duration_minutes?: number | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}