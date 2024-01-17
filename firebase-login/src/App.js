import './App.css';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/auth/Signup';
import Signin from './Components/auth/Signin'
import AuthDetails from './Components/AuthDetails';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} /> 
        </Routes>
      </Box>
      <AuthDetails />
    </>
  );
}

export default App;
