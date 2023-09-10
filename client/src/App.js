import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Signup from './components/Signup';

function App() {
  // Initialize the authentication context
  useAuthContext();

  return (
    <div>
      {/* Set up BrowserRouter for client-side routing */}
      <BrowserRouter>
        {/* Define route configuration */}
        <Routes>
          {/* Define a route for the dashboard component */}
          <Route path='/dashboard' element={<Home />} />

          {/* Define a catch-all route for the login component */}
          <Route path='/*' element={<Login />} />

          {/* Define a route for the signup component */}
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;