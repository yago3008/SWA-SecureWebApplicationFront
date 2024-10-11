import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/mainRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ routes }/>
  </StrictMode>,
)
