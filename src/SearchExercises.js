import React, { useState } from 'react';
import { exerciseOptions, fetchData } from './fetchData';

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
      <div>
        <h3>{theExercise.name}</h3>
        <img src={theExercise.gifUrl} alt="theImg" />
      </div>
    )
})

  return (
    <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <button onClick={handleSearch}>Search</button>
        {allExercises}
    </div>
  )
}
