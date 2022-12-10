import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import CreateExercise from './createExercise';
import ExerciseDetail from './ExerciseDetail';
import ExerciseLog from './ExerciseLog';
import ExerciseLibrary from './SearchExercises';
import { Routes, Route } from "react-router-dom";
import { UserProvider} from './contexts/UserContext';
import NutritionLog from './NutritionLog';


function App(props) {
  return (

    <div className="App">
      <UserProvider>
        <Navbar />
        
  
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/library" element={<ExerciseLibrary />} />
          <Route path="/exerciseLog" element={<ExerciseLog />} />
          <Route path="/exercise/:id" element={<ExerciseDetail exercise={props.exercise} obtainExercises={props.obtainExercises}/>} />
          <Route path="/createExercise" element={<CreateExercise />} />
          <Route path='/nutrition' element={<NutritionLog />} />
        </Routes>

      </UserProvider>
    </div>
  );
}

export default App;
