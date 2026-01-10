-- Formly Website Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- WORK PROJECTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS work_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Сургалтын төв', 'Эмнэлэг / гоо сайхан', 'Үйлчилгээ', 'Зуучлал')),
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  industry TEXT NOT NULL,
  goal TEXT NOT NULL,
  problem TEXT NOT NULL,
  solution TEXT NOT NULL,
  pages TEXT[] DEFAULT '{}',
  duration TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PRICING PLANS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS pricing_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  unit TEXT,
  description TEXT NOT NULL,
  long_description TEXT,
  card_description TEXT,
  popular BOOLEAN DEFAULT FALSE,
  features TEXT[] DEFAULT '{}',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- FAQ TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- SERVICES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PROCESS STEPS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS process_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  day TEXT NOT NULL,
  label TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- SITE CONTENT TABLE (JSON storage for flexible content)
-- ============================================
CREATE TABLE IF NOT EXISTS site_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section TEXT UNIQUE NOT NULL,
  content JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CONTACT SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  business_type TEXT NOT NULL,
  requirements TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- MONTHLY SERVICE (CARE) TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS monthly_service (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  price TEXT NOT NULL,
  unit TEXT NOT NULL,
  description TEXT NOT NULL,
  card_description TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_work_projects_slug ON work_projects(slug);
CREATE INDEX IF NOT EXISTS idx_work_projects_category ON work_projects(category);
CREATE INDEX IF NOT EXISTS idx_pricing_plans_popular ON pricing_plans(popular);
CREATE INDEX IF NOT EXISTS idx_pricing_plans_order ON pricing_plans(display_order);
CREATE INDEX IF NOT EXISTS idx_faqs_order ON faqs(display_order);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(display_order);
CREATE INDEX IF NOT EXISTS idx_process_steps_order ON process_steps(display_order);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);

-- ============================================
-- TRIGGERS for updated_at timestamps
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_work_projects_updated_at BEFORE UPDATE ON work_projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pricing_plans_updated_at BEFORE UPDATE ON pricing_plans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_faqs_updated_at BEFORE UPDATE ON faqs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_process_steps_updated_at BEFORE UPDATE ON process_steps
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON site_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_monthly_service_updated_at BEFORE UPDATE ON monthly_service
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) Policies
-- ============================================
-- Enable RLS on all tables
ALTER TABLE work_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE process_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE monthly_service ENABLE ROW LEVEL SECURITY;

-- Public read access for all content tables
CREATE POLICY "Public read access for work_projects" ON work_projects
  FOR SELECT USING (true);

CREATE POLICY "Public read access for pricing_plans" ON pricing_plans
  FOR SELECT USING (true);

CREATE POLICY "Public read access for faqs" ON faqs
  FOR SELECT USING (true);

CREATE POLICY "Public read access for services" ON services
  FOR SELECT USING (true);

CREATE POLICY "Public read access for process_steps" ON process_steps
  FOR SELECT USING (true);

CREATE POLICY "Public read access for site_content" ON site_content
  FOR SELECT USING (true);

CREATE POLICY "Public read access for monthly_service" ON monthly_service
  FOR SELECT USING (true);

-- Admin full access (adjust role name as needed)
-- Note: You'll need to create an admin role or use service_role key for admin operations
CREATE POLICY "Admin full access for work_projects" ON work_projects
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access for pricing_plans" ON pricing_plans
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access for faqs" ON faqs
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access for services" ON services
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access for process_steps" ON process_steps
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access for site_content" ON site_content
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access for monthly_service" ON monthly_service
  FOR ALL USING (auth.role() = 'service_role');

-- Contact submissions: public insert, admin read/update
CREATE POLICY "Public insert for contact_submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin access for contact_submissions" ON contact_submissions
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================
-- INITIAL DATA (Optional - for seeding)
-- ============================================
-- You can add INSERT statements here to seed initial data
-- Example:
-- INSERT INTO pricing_plans (name, price, unit, description, popular, features, display_order)
-- VALUES 
--   ('Starter', '450,000', '₮', 'Эхлэхэд тохиромжтой', true, ARRAY['1–3 хуудас', 'Messenger + Form', 'Mobile-first UX'], 1),
--   ('Growth', '750,000', '₮', 'Илүү дэлгэрэнгүй', false, ARRAY['6–8 хуудас', 'Work / FAQ / Process хуудас', 'UX бичиглэл'], 2);

