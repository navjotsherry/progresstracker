import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login'
import { useAuthContext } from './hooks/useAuthContext';
import Signup from './components/Signup';

function App() {
  useAuthContext()
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/*' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
