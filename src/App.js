import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import AdminLogin from './Components/AdminLogin';
import AddComplaint from './Components/AddComplaint';
import ViewmyComplaint from './Components/ViewmyComplaint';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/addcomplaint" element={<AddComplaint/>}/>
        <Route path="/mycomplaint" element={<ViewmyComplaint/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
