import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import GlobalStyle from './assets/styles/Global.js';

import { RouterProvider } from 'react-router-dom'; 
import { route } from './routes/Route.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
