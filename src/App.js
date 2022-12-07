import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import CreateExercise from './createExercise';
import ExerciseLog from './ExerciseLog';
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
          <Route path="/exerciseLog" element={<ExerciseLog />} />
          <Route path="/createExercise" element={<CreateExercise />} />
        </Routes>

      </UserProvider>
    </div>
  );
}

export default App;
