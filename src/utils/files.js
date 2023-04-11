export const files = {
  'package.json': {
    file: {
      contents: `{
        "name": "vite-react",
        "private": true,
        "version": "0.0.0",
        "type": "module",
        "scripts": {
          "dev": "vite",
          "build": "vite build",
          "preview": "vite preview"
        },
        "dependencies": {
          "react": "^18.2.0",
          "react-dom": "^18.2.0"
        },
        "devDependencies": {
          "@types/react": "^18.0.28",
          "@types/react-dom": "^18.0.11",
          "@vitejs/plugin-react": "^3.1.0",
          "autoprefixer": "^10.4.14",
          "postcss": "^8.4.21",
          "tailwindcss": "^3.3.1",
          "vite": "^4.2.0"
        }
      }
      `
    }
  },
  'postcss.config.js': {
    file: {
      contents: `export default {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }`
    }
  },
  'tailwind.config.js': {
    file: {
      contents: `module.exports = {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}"
        ],
        theme: {
          fontFamily: {
            'main': ["'Bai Jamjuree'", "sans-serif"],
            'secondary': ["'Inter'", "sans-serif"]
          },
          extend: {
            colors: {
              "grad1": "#B16CEA",
              "grad2": "#FF5E69",
              "grad3": "#FF8A56",
              "grad4": "#FFA84B",
              "grayblack": "#1C1C22",
              "graywhite": "#F0F2F5", 
            }
          },
        },
        plugins: [],
      }
      `
    },
  },
  'vite.config.js': {
    file: {
      contents: `import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'
      
      // https://vitejs.dev/config/
      export default defineConfig({
        plugins: [react()],
      })
      `
    }
  },
  'index.html': {
    file: {
      contents: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Portfolio Builder</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>
      `
    }
  },
  'src': {
    directory: {
      'index.css': {
        file: {
          contents: `@tailwind base;
          @tailwind components;
          @tailwind utilities;
          `
        }
      },
      'main.jsx': {
        file: {
          contents: `import React from 'react'
          import ReactDOM from 'react-dom/client'
          import App from './App'
          import './index.css'
          
          ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
          )
          `
        }
      }
    }
  },
  'public': {
    directory: {
      'vite.svg': {
        file: {
          contents: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>`
        }
      }
    }
  }
}