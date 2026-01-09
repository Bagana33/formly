# Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `formly-website` (or your preferred name)
4. Description: "Formly website with admin dashboard"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/formly-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Or if you prefer SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/formly-website.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your `formly-website` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## Step 4: Environment Variables (if needed)

If you add environment variables later:
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add your variables

## Your Site Will Be Live At:

After deployment, Vercel will provide a URL like:
- `https://formly-website.vercel.app`

You can also add a custom domain in Vercel settings.

