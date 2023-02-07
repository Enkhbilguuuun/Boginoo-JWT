import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Links from "./pages/Link";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import HomeLogged from './pages/HomeLogged';

export const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Authorization": "authorizationToken",
    "Content-type": "application/json; charset=UTF-8",
  },
  
});


function App() {

  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/user/:id' element={<HomeLogged/>}/>
        <Route path="/:Shortlink" element={<Links />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
