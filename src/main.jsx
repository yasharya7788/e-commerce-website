import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <HashRouter>  {/* ❌ Remove basename */}
        <App />
      </HashRouter>
    </ShopContextProvider>
  </StrictMode>,
)


