import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ProfilesPage } from './pages/ProfilesPage.jsx'
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,

  },
  {
    path: '/profiles/:profileId',
    element: <ProfilePage />

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
