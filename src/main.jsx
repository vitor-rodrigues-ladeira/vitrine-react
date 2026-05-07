import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './pages/app/App.jsx'
import CardDetails from './pages/card-details/CardDetails.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<CardDetails />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)