-- Fix RLS policies for site_content table
-- Run this SQL in your Supabase SQL Editor to allow anonymous insert/update

-- Drop existing policies if they exist (optional, will error if they don't exist)
DROP POLICY IF EXISTS "Public insert for site_content" ON site_content;
DROP POLICY IF EXISTS "Public update for site_content" ON site_content;
DROP POLICY IF EXISTS "Admin full access for site_content" ON site_content;

-- Allow anonymous insert/update for site_content (for admin page)
-- Note: In production, consider adding authentication or restricting this further
CREATE POLICY "Public insert for site_content" ON site_content
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public update for site_content" ON site_content
  FOR UPDATE USING (true);
