import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbars from './LandingPage/Navbar';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import CreateExercise from './ExerciseComponets/createExercise';
import ExerciseDetail from './ExerciseComponets/ExerciseDetail';
import ExerciseLog from './ExerciseComponets/ExerciseLog';
import ExerciseLibrary from './SearchExercises';
import { Routes, Route } from "react-router-dom";
import { UserProvider} from './contexts/UserContext';
import NutritionLog from './MealComponents/NutritionLog';
import CreateMealEntry from './MealComponents/CreateMealEntry';
import MealDetails from './MealComponents/MealDetails';
import EditMeal from './MealComponents/EditMeal';
import SearchRecipies from './SearchRecipes';
import { useState, useEffect } from 'react';


function App(props) {

  const [meals, setMeal] = useState([]);

  const obtainMeals = () => {
    axios.get("http://localhost:4200/nutrition/mealItem")
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
          <Route path="/editMeal" element={<EditMeal />} />
        </Routes>

      </UserProvider>
    </div>
  );
}

export default App;
