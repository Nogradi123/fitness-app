import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import Button from 'react-bootstrap/Button'
import CreateExercise from './createExercise';



export default function ExerciseLog() {
    // const { theUser } = UserContext(UserContext)
    const [modalShow, setModalShow] = React.useState(false);
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
            
                    <Button className="delete" onClick={() => {deleteExercise(eachExercise._id)}}>x</Button>
                        <Link to={"/exercise/"+eachExercise._id} style={{ textDecoration: 'none', color:"black" }}>
                            {eachExercise.exerciseName}
                        </Link>
                    
            </div>
        )
    })
  return (
    <>
        <div className='add'>
         <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Exercise
        </Button>
        <CreateExercise show={modalShow} onHide={() => setModalShow(false)} />

        </div>
        {listOfExercises}
    </>
  )
}
