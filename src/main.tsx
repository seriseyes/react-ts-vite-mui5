import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from "./views/auth/Login";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
