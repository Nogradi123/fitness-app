import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




export default function NutritionLog() {

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

    const deleteMealEntry = (theID) =>{
        console.log(theID);
        axios.post("http://localhost:4200/exercise/delete", {id:theID})
        .then((response)=>{
            console.log(response);
            obtainMeals();
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    console.log({meals})
    const listOfExercises = meals.map((eachMeal) => {
        return (
            <div key={eachMeal._id}>
            
                <table className="exercise-list">
                    <tr>
                    <button onClick={() => {deleteMealEntry(eachMeal._id)}}>X</button>
                        <Link to={"/nutrition/"+eachMeal._id}>
                            <td>{eachMeal.foodName}</td>
                        </Link>
                    </tr>
                </table>
            </div>
        )
    })
  return (
    <div>
        <Link to={'/createMealEntry'}>
            <button>+</button>
        </Link>
        {listOfExercises}
    </div>
  )
}
