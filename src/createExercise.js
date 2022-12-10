import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateExercise(props) {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    type: "",
    exerciseName: "",
    sets: 0,
    weight: "",
    repetition: "",
    rest: ""
  });

  const updateInput = (e, thingToUpdate)=>{
    setFormState({...formState, [thingToUpdate]: e.target.value})
  }

  const sendExerciseInfo = () => {
    axios.post("http://localhost:4200/exercise/create", {
      type: formState.type,
      exerciseName: formState.exerciseName,
      sets: formState.sets,
      weight: formState.weight,
      repetition: formState.repetition,
      rest: formState.rest
    })
    .then((response) => {
      props.obtainExercises();
      navigate('/')
    })
    .catch((err)=>{
      console.log({err, success: false})
    })
  }


  return (
    <div>
      <h3>Add Exercise</h3>
            <div>
                Exercise Type:
                <input type="text" value={formState.type} onChange={(e)=>{updateInput(e,"type")}} />
            </div>
            <div>
                Exercise Name
                <input type="text" value={formState.exerciseName} onChange={(e)=>{updateInput(e,"exerciseName")}} />
            </div>
            <div>
                Number of Sets
                <input type="text" value={formState.sets} onChange={(e)=>{updateInput(e,"sets")}} />
            </div>
            <div>
                Weight
                <input type="text" value={formState.weight} onChange={(e)=>{updateInput(e,"weight")}} />
            </div>
            <div>
                Number of Repetition
                <input type="text" value={formState.repetition} onChange={(e)=>{updateInput(e,"repetition")}} />
            </div>
            <div>
                Amount of Rest 
                <input type="text" value={formState.rest} onChange={(e)=>{updateInput(e,"rest")}} />
            </div>
            <button onClick={sendExerciseInfo}>Submit</button>
    </div>
  )
}
