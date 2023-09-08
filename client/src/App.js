import { useState,useEffect } from 'react';
import Home from './components/Home';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  useAuthContext()
  return(
    <div>
        <Home/>
    </div>
  )
}

export default App;
