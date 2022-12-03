import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login'
import { Routes, Route } from "react-router-dom";
import { UserProvider} from './contexts/UserContext';


function App() {
  return (

    <div className="App">
      <UserProvider>
        <Navbar />
  
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </UserProvider>
    </div>
  );
}

export default App;
