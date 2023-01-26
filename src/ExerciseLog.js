import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button'
import CreateExercise from './createExercise';



export default function ExerciseLog() {
    // const { theUser } = UserContext(UserContext)
    const [modalShow, setModalShow] = React.useState(false);
    const [exercise, setExercise] = useState([]);

    const obtainExercises = () => {
        axios.get("https://fittrackserver.onrender.com/exercise/exercise")
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
        axios.post("https://fittrackserver.onrender.com/exercise/delete", {id:theID})
        .then((response)=>{
            console.log(response);
            obtainExercises();
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const reload = () => {
        window.location.reload();
    }

    const onHide = () => {
        setModalShow(false);
        reload();
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
        <CreateExercise show={modalShow} onHide={onHide} />

        </div>
        {listOfExercises}
    </>
  )
}
