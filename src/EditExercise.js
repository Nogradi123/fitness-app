import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function EditExercise(props) {
    console.log(props)
    const [formState, setFormState] = useState(props.exercise);
    const navigate = useNavigate();
    
    const endEdit = () => {
        props.stopEditing();
        navigate("/exercise/"+props.exercise._id);
    }
    
    const updateInput = (e, thingToUpdate) =>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    };

    const submitForm = () => {
        axios.post("https://fittrackserver.onrender.com/exercise/edit/"+props.exercise._id, {
            type: formState.type,
            exerciseName: formState.exerciseName,
            sets: formState.sets,
            weight: formState.weight,
            repetition: formState.repetition,
            rest: formState.rest
        }).then((response) => {
            props.obtainExercises();
        }).catch((err) => {
            console.log({err});
        })
    }

return (
    <div>
          <div>
            <p><Button onClick={endEdit}>x</Button></p>

            </div>
        <div>
            Type - 
            <input value={formState.type} onChange={(e)=>{updateInput(e, "type")}} />
        </div>
        <div>
                Number of Sets - 
                <input type="text" value={formState.sets} onChange={(e)=>{updateInput(e,"sets")}} />
            </div>
            <div>
                Weight - 
                <input type="text" value={formState.weight} onChange={(e)=>{updateInput(e,"weight")}} />
            </div>
            <div>
                Number of Repetition - 
                <input type="text" value={formState.repetition} onChange={(e)=>{updateInput(e,"repetition")}} />
            </div>
            <div>
                Amount of Rest -
                <input type="text" value={formState.rest} onChange={(e)=>{updateInput(e,"rest")}} />
            </div>
        <Button onClick={submitForm}>Submit</Button>
    </div>
  )
}
