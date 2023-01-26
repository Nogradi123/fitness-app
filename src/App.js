import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbars from './Navbar';
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
import CreateMealEntry from './CreateMealEntry';
import MealDetails from './MealDetails';
import EditMeal from './EditMeal';
import Test from './Test';
import SearchRecipies from './SearchRecipes';
import { useState, useEffect } from 'react';


function App(props) {

  const [meals, setMeal] = useState([]);

  const obtainMeals = () => {
    axios.get("https://fittrackserver.onrender.com/nutrition/mealItem")
    .then((response) => {
        setMeal(response.data);
    })
    .catch((err) => {
        console.log(err);
        
    })
}

useEffect(() => {
  obtainMeals();
}, [])

if(!meals) {
  return ''
}
  return (

    <div>
      <UserProvider>
        <Navbars />
        
  
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipies" element={<SearchRecipies />} />
          <Route path="/library" element={<ExerciseLibrary />} />
          <Route path="/exerciseLog" element={<ExerciseLog />} />
          <Route path="/exercise/:id" element={<ExerciseDetail exercise={props.exercise} obtainExercises={props.obtainExercises}/>} />
          <Route path="/createExercise" element={<CreateExercise />} />
          <Route path='/nutrition' element={<NutritionLog meals={meals} obtainMeals={obtainMeals}/>} />
          <Route path='/createMealEntry' element={<CreateMealEntry />} />
          <Route path="/nutrition/:id" element={<MealDetails meals={meals} obtainMeals={obtainMeals}/>} />
          <Route path="/test" element={<Test />}/>
          <Route path="/editMeal" element={<EditMeal />} />
        </Routes>

      </UserProvider>
    </div>
  );
}

export default App;
