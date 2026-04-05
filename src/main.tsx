import './coi-sw'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ExportPage from './pages/ExportPage'
import ImportPage from './pages/ImportPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/local-llm-import-export">
      <Routes>
        <Route path="/export" element={<ExportPage />} />
        <Route path="/import" element={<ImportPage />} />
        <Route path="*" element={<Navigate to="/export" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
