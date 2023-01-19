import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CreateExercise(props) {
  

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
      props.reload();
     

    })
    .catch((err)=>{
      console.log({err, success: false})
    })
  }




  return (
    <Modal {...props}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Exercise
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                Exercise Type - 
                <input type="text" value={formState.type} onChange={(e)=>{updateInput(e,"type")}} placeholder="ex: Cardio"/>
            </div>
            <div>
                Exercise Name -
                <input type="text" value={formState.exerciseName} onChange={(e)=>{updateInput(e,"exerciseName")}} />
            </div>
            <div>
                Number of Sets -
                <input type="text" value={formState.sets} onChange={(e)=>{updateInput(e,"sets")}} />
            </div>
            <div>
                Weight -
                <input type="text" value={formState.weight} onChange={(e)=>{updateInput(e,"weight")}} placeholder="in lbs"/>
            </div>
            <div>
                Number of Repetition -
                <input type="number" value={formState.repetition} onChange={(e)=>{updateInput(e,"repetition")}} />
            </div>
            <div>
                Amount of Rest -
                <input type="text" value={formState.rest} onChange={(e)=>{updateInput(e,"rest")}} placeholder="in seconds"/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={sendExerciseInfo}>Add Exercise</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
     
    
  )
}
