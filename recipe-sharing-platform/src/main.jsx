import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Keep this - it imports Tailwind


if (process.env.NODE_ENV === 'development') {
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);