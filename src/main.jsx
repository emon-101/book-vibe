import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/Routes.jsx'
import { StrictMode } from 'react'
import BookProvider from './context/BookContext/BookProvider.jsx'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
  </StrictMode>
)
