import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';

export default function CreateMealEntry(props) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    foodName: "",
    serving: "",
    measurement: ""
  });

  const updateInput = (e, thingToUpdate)=>{
    setFormState({...formState, [thingToUpdate]: e.target.value})
  }



  const sendMealInfo = () => {
    axios.post("https://fittrackserver.onrender.com/nutrition/create", {
     foodName: formState.foodName,
     serving: formState.serving,
     measurement: formState.measurement
    })
    .then((response) => {
      props.obtainMeals();
      navigate('/nutrition')

    })
    .catch((err)=>{
      console.log({err, success: false})
    })
  }




  return (
    <Modal {...props}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Meal
        </Modal.Title>
      </Modal.Header>
    
    <Modal.Body>
      <div>
          Food Name:
          <input type="text" value={formState.foodName} onChange={(e)=>{updateInput(e,"foodName")}} />
      </div>
      <div>
          serving size:
          <input type="text" value={formState.serving} onChange={(e)=>{updateInput(e,"serving")}} />
      </div>
      <div>
          measurement:
          <input type="text" value={formState.measurement} onChange={(e)=>{updateInput(e,"measurement")}} />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={sendMealInfo}>Submit</Button>
      <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

