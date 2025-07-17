import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './context/dataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
        <Router>
          <App />
        </Router>
    </DataContextProvider>
  </StrictMode>,
)
