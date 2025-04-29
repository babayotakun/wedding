# Hosting Your Lord of the Rings Wedding Invitation

This guide provides step-by-step instructions for hosting your wedding invitation website on various free platforms. Choose the option that works best for you.

## Table of Contents
1. [GitHub Pages](#github-pages)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [Firebase Hosting](#firebase-hosting)
5. [Comparison of Hosting Options](#comparison)

## GitHub Pages
<a name="github-pages"></a>

GitHub Pages is a free hosting service provided by GitHub that allows you to host static websites directly from a GitHub repository.

### Steps to Deploy on GitHub Pages:

1. **Create a GitHub Account**
   - Go to [GitHub](https://github.com/) and sign up for a free account if you don't already have one

2. **Create a New Repository**
   - Click the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., "lotr-wedding-invitation")
   - Make it public
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file" on the repository page
   - Drag and drop all files from the wedding-invitation folder
   - Commit the changes with a message like "Initial commit"

4. **Enable GitHub Pages**
   - Go to the repository settings (click "Settings" tab)
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - GitHub will provide you with a URL where your site is published (typically https://yourusername.github.io/lotr-wedding-invitation/)

5. **Access Your Website**
   - Wait a few minutes for GitHub to deploy your site
   - Visit the provided URL to see your wedding invitation online

## Netlify
<a name="netlify"></a>

Netlify offers free hosting with additional features like custom domains and form handling.

### Steps to Deploy on Netlify:

1. **Create a Netlify Account**
   - Go to [Netlify](https://www.netlify.com/) and sign up for a free account (you can sign up with your GitHub account)

2. **Deploy Your Site**
   - From the Netlify dashboard, click "New site from Git" if you've uploaded to GitHub, or "Deploy manually" if you want to upload directly
   
   **For manual upload:**
   - Click "Sites" then "Drag and drop your site folder here"
   - Drag your entire wedding-invitation folder to the upload area
   - Netlify will automatically deploy your site

3. **Configure Your Site**
   - After deployment, Netlify will assign a random subdomain (e.g., random-name.netlify.app)
   - Click on "Site settings" to customize your site name to something more memorable (e.g., aragorn-arwen-wedding.netlify.app)

4. **Optional: Add a Custom Domain**
   - In "Site settings", go to "Domain management"
   - Click "Add custom domain" if you own a domain you'd like to use

## Vercel
<a name="vercel"></a>

Vercel is another excellent platform for hosting static sites with a generous free tier.

### Steps to Deploy on Vercel:

1. **Create a Vercel Account**
   - Go to [Vercel](https://vercel.com/) and sign up for a free account (you can sign up with GitHub)

2. **Install Vercel CLI (Optional)**
   - If you prefer command line: `npm i -g vercel`
   - Run `vercel login` and follow the prompts

3. **Deploy Your Site**
   - From the Vercel dashboard, click "New Project"
   - Import from Git repository if you've uploaded to GitHub, or use "Upload" for direct upload
   - For direct upload, compress your wedding-invitation folder into a ZIP file and upload it
   - Configure project settings (the defaults should work fine for a static site)
   - Click "Deploy"

4. **Access Your Website**
   - Vercel will provide a URL for your deployed site (e.g., lotr-wedding.vercel.app)
   - You can customize this in the project settings

## Firebase Hosting
<a name="firebase-hosting"></a>

Firebase Hosting is Google's platform for hosting static websites with a generous free tier.

### Steps to Deploy on Firebase:

1. **Create a Firebase Account**
   - Go to [Firebase](https://firebase.google.com/) and sign up with your Google account

2. **Install Firebase Tools**
   - Install Node.js if you don't have it already
   - Open a terminal/command prompt and run: `npm install -g firebase-tools`
   - Run `firebase login` to authenticate

3. **Initialize Firebase in Your Project**
   - Navigate to your wedding-invitation folder in the terminal
   - Run `firebase init`
   - Select "Hosting" when prompted for features
   - Choose to create a new project or use an existing one
   - Set "public" as your public directory when asked
   - Answer "Yes" to configure as a single-page app if asked
   - Choose "No" for GitHub workflows

4. **Deploy Your Site**
   - Run `firebase deploy`
   - Firebase will provide a URL where your site is hosted

## Comparison of Hosting Options
<a name="comparison"></a>

| Platform | Pros | Cons | Best For |
|----------|------|------|----------|
| GitHub Pages | Simple setup, integrates with Git | Limited features | Developers familiar with GitHub |
| Netlify | Easy deployment, form handling, custom domains | Slightly more complex than GitHub Pages | Those wanting more features |
| Vercel | Fast performance, preview deployments | More developer-focused | Projects that might grow later |
| Firebase | Google infrastructure, analytics | More setup steps | Those in the Google ecosystem |

## Recommended Option for Beginners

If you're new to web hosting, **Netlify** offers the best balance of simplicity and features. The drag-and-drop upload makes it extremely easy to get your wedding invitation online quickly.

## Next Steps After Deployment

1. **Test your website** on different devices to ensure it looks good on all screen sizes
2. **Share the URL** with your wedding guests
3. **Consider adding a custom domain** for a more professional look (all platforms support this)
4. **Set up analytics** to see how many people visit your invitation (Netlify, Vercel, and Firebase all offer this)

---

If you encounter any issues during deployment, each platform offers comprehensive documentation and support resources.
