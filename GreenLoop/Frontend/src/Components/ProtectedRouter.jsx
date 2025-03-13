// Components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { auth } from '../Data/Firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/Login" replace />;
  }

  // If user is logged in, render the protected component
  return children;
}

export default ProtectedRoute;