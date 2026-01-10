# Supabase Database Schema

Энэ folder нь Formly website-ийн Supabase database schema-г агуулна.

## Ашиглах заавар

### 1. Supabase Project үүсгэх

1. [Supabase](https://supabase.com) дээр бүртгүүлэх
2. Шинэ project үүсгэх
3. Project settings → API → Project URL болон anon key-г авах

### 2. Schema суулгах

1. Supabase Dashboard → SQL Editor руу орох
2. `schema.sql` файлын агуулгыг хуулах
3. SQL Editor дээр paste хийж, Run дарна

Эсвэл Supabase CLI ашиглах:

```bash
supabase db push
```

### 3. Environment Variables нэмэх

`.env.local` файлд дараах variables нэмэх:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Database Tables

Schema нь дараах table-уудыг үүсгэнэ:

- **work_projects** - Портфолио төслүүд
- **pricing_plans** - Үнийн багцууд
- **faqs** - FAQ асуултууд
- **services** - Үйлчилгээнүүд
- **process_steps** - Process алхмууд
- **site_content** - Site content (JSON format)
- **contact_submissions** - Contact form submissions
- **monthly_service** - Сар бүрийн үйлчилгээ

### 5. Row Level Security (RLS)

- Бүх table-ууд дээр RLS идэвхжсэн
- Public read access байна (хүн бүр уншиж болно)
- Admin operations нь service_role key шаарддаг

### 6. Features

- ✅ Automatic `updated_at` timestamps (triggers)
- ✅ UUID primary keys
- ✅ Indexes for performance
- ✅ Array support (TEXT[] for features, pages)
- ✅ JSONB for flexible content storage
- ✅ Display order support for sorting

## Next Steps

1. Schema суулгах
2. Supabase client library суулгах: `npm install @supabase/supabase-js`
3. Supabase client үүсгэх
4. Admin dashboard-аас database руу data save хийх функционал нэмэх

