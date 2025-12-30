import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './assets/stylesheets/style.css'
import ResumePage from './pages/ResumePage.jsx'
import Layout from './Layout.jsx'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
       <Route path="/" element={<ResumePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
