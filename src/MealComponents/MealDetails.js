/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import EditMeal from './EditMeal';


export default function MealDetails({obtainMeals}) {
    const {id} = useParams();

    const [theMeal, setTheMeal] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const fetchMealDetails = () => {
        axios.get("http://localhost:4200/nutrition/"+id)
        .then((response) => {
            console.log(response.data);
            setTheMeal(response.data);
        })
        .catch((err) => {
            console.log(err);
            
        })
    }

    useEffect(() => {
        fetchMealDetails();
    }, []);

    const handleClick = event => {
        setIsShown(current => !current);
        setIsShown(true);
    }

    const stopEditing = () => {
        setIsShown(false)
    }

        if(!theMeal) {
            return 'Loading...';
        }
        return (
            <div>
            <div key={theMeal._id}>
                <h3>Serving Size - {theMeal.serving}</h3>
                <h3>Measurement - {theMeal.measurement}</h3>
            </div>
            <div>
                <button onClick={handleClick}>Edit Inputs</button>
                {isShown && <EditMeal theMeal={theMeal} obtainMeals={obtainMeals} stopEditing={stopEditing}/>}
            </div>
    
        </div>
    )
}