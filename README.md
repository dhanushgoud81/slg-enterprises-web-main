# SLG Enterprises Website

A modern, responsive website for SLG Enterprises built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live website: [SLG Enterprises](https://your-username.github.io/slg-enterprises-web/)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/slg-enterprises-web.git
cd slg-enterprises-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🏗️ Build

To build for production:

```bash
npm run build
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment Steps:

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository named `slg-enterprises-web`
   - Make sure it's public (required for free GitHub Pages)

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/slg-enterprises-web.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically build and deploy your site

4. **Update Repository Name**
   - If your repository name is different from `slg-enterprises-web`, update the `base` path in `vite.config.ts`

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── main.tsx       # App entry point
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Clean and professional design
- **Fast Performance** - Optimized with Vite
- **SEO Friendly** - Proper meta tags and structure
- **Accessible** - WCAG compliant components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
