import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function EditMeal({theMeal, obtainMeals}) {
    
    const [formState, setFormState] = useState(theMeal);

    const updateInput = (e, thingToUpdate) => {
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () => {
        axios.post("http://localhost:4200/nutrition/edit/"+theMeal._id, {
            foodName: formState.foodName,
            serving: formState.serving,
            measurement: formState.measurement
        }).then((response) => {
            obtainMeals();
        }).catch((err) => {
            console.log({err})
        })
    }
  return (
    <div>
        Food Name:
        <input type="text" value={formState.foodName} onChange={(e) =>{updateInput(e, "foodName")}} />
        <button onClick={submitForm}>Submit</button>
    </div>
  )
}
