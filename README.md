# 📋 PasteApp

A simple and modern **Paste Management Web App** built with React and Redux Toolkit.

PasteApp allows users to create, view, edit, delete, copy and share text snippets through unique URLs. Paste data is stored in the browser using LocalStorage, making the application lightweight and easy to use.

## 🚀 Live Demo

🔗 **[PasteApp Live](https://paste-app-alpha-gray.vercel.app/)**

## ✨ Features

- 📝 Create a new paste
- 👀 View saved pastes
- ✏️ Edit existing pastes
- 🗑️ Delete pastes
- 📋 Copy paste content to clipboard
- 🔗 Share paste through a unique URL
- 💾 Persistent data using LocalStorage
- 🔄 Redux Toolkit for state management
- 📱 Responsive and clean UI
- ⚡ Fast development and deployment with Vite + Vercel

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### State Management
- Redux Toolkit
- React Redux

### Build Tool
- Vite

### Storage
- Browser LocalStorage

### Deployment
- Vercel

## 📂 Project Structure -

paste-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Paste.jsx
│   │   └── ViewPaste.jsx
│   │
│   ├── redux/
│   │   └── pasteSlice.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── store.js
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
