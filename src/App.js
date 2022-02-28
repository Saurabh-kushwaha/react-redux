import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import  Login  from './pages/Login';

function App() {
  const con = useSelector((state) => state.auth.isUserLogIn);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  useEffect(() => {

    if (con) {
      if (pathname === '/login') {
        navigate("/");
      } else {
        navigate(pathname);
      }
    } else {
      navigate("/login")
    }
    
  }, [navigate, con, pathname]);
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='about' element = {<About/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={ <Login/>}/>
      </Routes>
    </div>
  );
}
export default App;
