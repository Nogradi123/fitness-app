import React from 'react';
import axios from 'axios';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateMealEntry from './CreateMealEntry';
import Button from 'react-bootstrap/Button'




export default function NutritionLog({meals, obtainMeals}) {

    const [modalShow, setModalShow] = React.useState(false);

    const deleteMealEntry = (theID) =>{
        console.log(theID);
        axios.post("http://localhost:4200/nutrition/delete", {id:theID})
        .then((response)=>{
            console.log(response);
            obtainMeals();
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    console.log({meals})
    const listOfMeals = meals.map((eachMeal) => {
        return (
            <div key={eachMeal._id}>
              
                <Button className="delete" onClick={() => {deleteMealEntry(eachMeal._id)}}>x</Button>
                <Link to={"/nutrition/"+eachMeal._id} style={{ textDecoration: 'none', color:"black" }}>
                    {eachMeal.foodName}
                </Link>

            </div>
        )
    })
    return (
        <div>
            <div className='add'>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                Add Entry
                </Button>
                <CreateMealEntry show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            {listOfMeals}
        </div>
    )
}
