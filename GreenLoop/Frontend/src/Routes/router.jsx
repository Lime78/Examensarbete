import { createHashRouter } from 'react-router-dom';
import Root from './root.jsx';
import LandingPage from '../Components/LandingPage.jsx';
import Contact from '../Components/Contact.jsx';

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
      }
    ]
  }
]);

export { router };