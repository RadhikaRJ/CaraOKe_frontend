
import './App.css';
import { Routes, Route } from "react-router-dom";
import Loginpage from "./screens/Login/index";
import Navigation from './displayComponents/navbar';
function App() {
  return (
    <div className="App">
     
        <h1>Landing Page is Login page</h1>
        <Navigation/>
        <Routes>
        
        <Route exact path="/login" element={<Loginpage />} />
        </Routes>
        
    </div>
  );
}

export default App;
