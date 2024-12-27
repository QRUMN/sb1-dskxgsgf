/*
  # Initial Schema for World Trade Compliance Platform

  1. New Tables
    - users
      - Custom user profile fields
      - Expertise level tracking
      - Language preferences
    - courses
      - Multi-tier course structure
      - Language support
      - Progress tracking
    - course_enrollments
      - User course relationships
      - Progress tracking
    - communities
      - Discussion forums
      - Study groups
    - posts
      - Community content
      - Moderation status
    
  2. Security
    - RLS policies for all tables
    - Content access controls
    - Moderation flags
*/

-- Users and Profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  avatar_url text,
  expertise_level text CHECK (expertise_level IN ('beginner', 'intermediate', 'expert')),
  preferred_language text DEFAULT 'en',
  bio text,
  company text,
  job_title text,
  is_mentor boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Courses
CREATE TABLE IF NOT EXISTS public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  level text CHECK (level IN ('intro', 'intermediate', 'expert')) NOT NULL,
  price decimal(10,2) NOT NULL,
  language text DEFAULT 'en',
  instructor_id uuid REFERENCES public.profiles(id),
  is_live boolean DEFAULT false,
  max_students integer,
  duration_minutes integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Course Enrollments
CREATE TABLE IF NOT EXISTS public.course_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id),
  course_id uuid REFERENCES public.courses(id),
  progress float DEFAULT 0,
  status text CHECK (status IN ('enrolled', 'completed', 'dropped')) DEFAULT 'enrolled',
  enrolled_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  UNIQUE(user_id, course_id)
);

-- Communities
CREATE TABLE IF NOT EXISTS public.communities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text NOT NULL,
  created_by uuid REFERENCES public.profiles(id),
  is_private boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Posts
CREATE TABLE IF NOT EXISTS public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id uuid REFERENCES public.communities(id),
  author_id uuid REFERENCES public.profiles(id),
  title text NOT NULL,
  content text NOT NULL,
  type text CHECK (type IN ('discussion', 'question', 'case_study', 'news')) NOT NULL,
  status text CHECK (status IN ('draft', 'published', 'archived', 'flagged')) DEFAULT 'published',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Courses Policies
CREATE POLICY "Courses are viewable by everyone" ON public.courses
  FOR SELECT USING (true);

CREATE POLICY "Instructors can update own courses" ON public.courses
  FOR UPDATE USING (auth.uid() = instructor_id);

-- Course Enrollments Policies
CREATE POLICY "Users can view own enrollments" ON public.course_enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can enroll in courses" ON public.course_enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Communities Policies
CREATE POLICY "Public communities are viewable by everyone" ON public.communities
  FOR SELECT USING (NOT is_private);

CREATE POLICY "Private communities are viewable by members" ON public.communities
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM community_members WHERE community_id = id AND user_id = auth.uid()
  ));

-- Posts Policies
CREATE POLICY "Published posts are viewable by everyone" ON public.posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authors can update own posts" ON public.posts
  FOR UPDATE USING (auth.uid() = author_id);