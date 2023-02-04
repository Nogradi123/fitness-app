/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import EditExercise from './EditExercise';
import Button from 'react-bootstrap/Button';


export default function ExerciseDetail({obtainExercises}) {
    const {id} = useParams();

    const [theExercise, setTheExercise] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const fetchExerciseDetails = () => {
        axios.get("http://localhost:4200/exercise/"+id)
        .then((response) => {
            console.log(response.data);
            setTheExercise(response.data);
        })
        .catch((err) => {
            console.log(err);
            
        })
    }

    useEffect(() => {
        fetchExerciseDetails();
    }, []);

    const handleClick = event => {
        setIsShown(current => !current);
        setIsShown(true);
    }

    const stopEditing = () => {
        setIsShown(false)
    }

        if(!theExercise) {
            return 'Loading...';
        }
        return (
            <div>
            <div key={theExercise._id}>
                <h3>Type:{theExercise.type}</h3>
                <h3>Sets:{theExercise.sets}</h3>
                <h3>Weight:{theExercise.weight}</h3>
                <h3>Repetition:{theExercise.repetition}</h3>
                <h3>Rest in seconds:{theExercise.rest}</h3>
            </div>
            <div>
                <Button onClick={handleClick}>Edit Inputs</Button>
                {isShown && <EditExercise exercise={theExercise} obtainExercises={obtainExercises} stopEditing={stopEditing}/>}
            </div>
    
        </div>
    )
}
