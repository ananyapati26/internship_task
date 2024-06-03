import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContextWrapper from './context/ThemeContextWrapper .jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextWrapper>
    <div className=" bg-white text-black dark:bg-black dark:text-zinc-200 transition duration-300">
    <App />
    </div>
    </ThemeContextWrapper>
  </React.StrictMode>,
)
