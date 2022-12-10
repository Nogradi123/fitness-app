import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




export default function ExerciseLog() {

    const [exercise, setExercise] = useState([]);

    const obtainExercises = () => {
        axios.get("http://localhost:4200/exercise/exercise")
        .then((response) => {
            setExercise(response.data);
        })
        .catch((err) => {
            console.log(err);
            
        })
    }

    useEffect(() => {
        obtainExercises();
    }, [])

    const deleteExercise = (theID) =>{
        console.log(theID);
        axios.post("http://localhost:4200/exercise/delete", {id:theID})
        .then((response)=>{
            console.log(response);
            obtainExercises();
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    console.log({exercise})
    const listOfExercises = exercise.map((eachExercise) => {
        return (
            <div key={eachExercise._id}>
            
                <table className="exercise-list">
                    <tr>
                    <button onClick={() => {deleteExercise(eachExercise._id)}}>X</button>
                        <Link to={"/exercise/"+eachExercise._id}>
                            <td>{eachExercise.exerciseName}</td>
                        </Link>
                    </tr>
                </table>
            </div>
        )
    })
  return (
    <div>
        <Link to={'/createExercise'}>
            <button>+</button>
        </Link>
        {listOfExercises}
    </div>
  )
}
