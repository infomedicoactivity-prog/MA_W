# MedicoActivity Website

A professional healthcare collaboration platform website connecting pharmaceutical companies, medical device manufacturers, CROs, healthcare marketing professionals, and doctors.

## GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages for free hosting.

### Setup Instructions

1. **Create a GitHub Repository**
   - Create a new repository on GitHub (e.g., `medicoactivity-website`)
   - Make note of the repository name for the next step

2. **Update Configuration**
   - Edit `vite-github.config.ts` and replace `/medicoactivity-website/` with your repository name in the `base` field
   - This ensures proper routing for GitHub Pages

3. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically build and deploy your site

5. **Access Your Website**
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`
   - The deployment workflow runs automatically on every push to the main branch

### Local Development

For local development, use the original setup:

```bash
npm install
npm run dev
```

### Building for Production

To build the static files locally:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Features

- **Professional Healthcare Design**: Medical-themed color scheme with blue, white, and green palette
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Google Forms Integration**: Direct links to Google Forms for data collection
- **SEO Optimized**: Proper meta tags and structured content for search engines
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, and Vite

## Contact Information

- **Email**: info.medicoactivity@gmail.com
- **Phone**: +91 7019580374
- **Address**: #140, Garebhavipalya, Bangalore 560068, India
- **LinkedIn**: [MedicoActivity](https://www.linkedin.com/in/medico-activity-b97831369)

## License

© 2025 MedicoActivity. All rights reserved.