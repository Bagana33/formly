-- Fix RLS policies for work_projects table
-- Run this SQL in your Supabase SQL Editor to allow anonymous insert/update/delete

-- Drop existing policies if they exist (optional, will error if they don't exist)
DROP POLICY IF EXISTS "Public insert for work_projects" ON work_projects;
DROP POLICY IF EXISTS "Public update for work_projects" ON work_projects;
DROP POLICY IF EXISTS "Public delete for work_projects" ON work_projects;

-- Allow anonymous insert/update/delete for work_projects (for content management)
-- Note: In production, consider adding authentication or restricting this further
CREATE POLICY "Public insert for work_projects" ON work_projects
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public update for work_projects" ON work_projects
  FOR UPDATE USING (true);

CREATE POLICY "Public delete for work_projects" ON work_projects
  FOR DELETE USING (true);
