import { createHashRouter } from 'react-router-dom';
import Root from './root.jsx';
import LandingPage from '../Components/LandingPage.jsx';
import Contact from '../Components/Contact.jsx';
import AboutUs from '../Components/aboutUs.js';
import Products from '../Components/Products.jsx';
import Login from '../Components/login.jsx';
import ProtectedRoute from '../Components/ProtectedRouter.jsx'; 
import Profile from '../Components/profile.jsx';
import SendMessage from '../Components/SendMessage.jsx';
import Channels from '../Components/Channels.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/OmOss",
        element: <AboutUs />
      },
      {
        path: "/SendMessages",
        element: <SendMessage />
      },
      {
        path: "/channels",
        element: (
          <ProtectedRoute>
            <Channels />
          </ProtectedRoute>
        )
      },
      {
        path: "/Produkter",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        )
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

export { router };