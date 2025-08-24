#!/bin/bash

echo "🚀 Deploying MedicoActivity to GitHub Pages..."

# Create a new repository structure for GitHub Pages
mkdir -p github-deploy
cd github-deploy

# Initialize git repository
git init
git branch -M main

# Copy the static HTML file as index.html
cp ../index-fixed.html index.html

# Create CNAME file for custom domain
echo "medicoactivity.com" > CNAME

# Add and commit files
git add .
git commit -m "Deploy MedicoActivity website to GitHub Pages"

echo "✅ Repository ready for GitHub Pages deployment!"
echo ""
echo "Next steps:"
echo "1. Create a new GitHub repository (public)"
echo "2. Add this as the remote origin:"
echo "   git remote add origin https://github.com/yourusername/medicoactivity.git"
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo "4. Enable GitHub Pages in repository Settings → Pages"
echo "5. Set custom domain to: medicoactivity.com"
echo "6. Configure DNS at Hostinger to point to GitHub Pages"

cd ..