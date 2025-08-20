#!/bin/bash

# GitHub Pages Deployment Script for MedicoActivity Website

echo "🚀 Starting GitHub Pages deployment setup..."

# Step 1: Copy the GitHub-specific configuration files
echo "📋 Setting up GitHub Pages configuration..."
cp package-github.json package.json
cp vite-github.config.ts vite.config.ts

# Step 2: Remove Replit-specific files that aren't needed for GitHub Pages
echo "🧹 Cleaning up unnecessary files..."
rm -rf server/
rm -rf shared/
rm -f drizzle.config.ts
rm -f .replit

# Step 3: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 4: Build the project
echo "🔨 Building the project..."
npm run build

echo "✅ GitHub Pages setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Create a GitHub repository"
echo "2. Update the 'base' field in vite.config.ts with your repository name (if needed)"
echo "3. Push your code to GitHub:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/yourusername/your-repo-name.git"
echo "   git push -u origin main"
echo ""
echo "4. Enable GitHub Pages in repository settings with 'GitHub Actions' as source"
echo "5. Your site will be available at: https://yourusername.github.io/your-repo-name/"