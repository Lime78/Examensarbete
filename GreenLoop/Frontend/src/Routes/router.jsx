import { createHashRouter } from 'react-router-dom';
import Root from './root.jsx';
import LandingPage from '../Components/LandingPage.jsx';
import Contact from '../Components/Contact.jsx';
import AboutUs from '../Components/aboutUs.js';
import Products from '../Components/Products.jsx';
import Login from '../Components/login.jsx';

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
        path: "/Produkter",
        element: <Products />
      },
      {
        path: "/Login",
        element: <Login />
      }
    ]
  }
]);

export { router };