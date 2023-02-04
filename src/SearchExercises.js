import React, { useState } from 'react';
import { exerciseOptions, fetchData } from './fetchData';
import Card from 'react-bootstrap/Card'

export default function SearchExercises() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  
  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search) 
        || exercise.equipment.toLowerCase().includes(search) 
        || exercise.bodyPart.toLowerCase().includes(search) 
      );

      setSearch('');
      setExercises(searchedExercises);
      console.log(exerciseData)
    }
  }

  const allExercises = exercises.map((theExercise) => {
    return (
    

        <Card className = "card" style={{width: '18rem'}}>
          <Card.Img variant='top' src={theExercise.gifUrl} className='cardImg'/>
          <Card.Body>
            <Card.Title>{theExercise.name.toUpperCase()}</Card.Title>
            <Card.Text>
              Body Part: {theExercise.bodyPart}<br/>
              Target Muscle: {theExercise.target}<br/>
              Equipment Needed: {theExercise.equipment}
            </Card.Text>
          </Card.Body>
        </Card>
      

    )
})

  return (
    <div id='exercise-container'>
      <div className='search-header'>
        <h1>Search Exercises</h1>
      </div>
      <div className='exercise-search'>
        <input className="exercise-input" type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <button className='search-exercise'onClick={handleSearch}>Search</button>
      </div>
      <div className='cards'>
        {allExercises}
      </div>

    </div>
    
  )
}
