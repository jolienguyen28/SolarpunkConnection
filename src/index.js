import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <script>document.documentElement.classList.add('js')</script>
    <App />
    <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
  </React.StrictMode>
)
