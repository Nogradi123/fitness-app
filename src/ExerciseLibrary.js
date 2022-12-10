import React, {useState, useEffect} from 'react';
import SearchExercises from './SearchExercises';




export default function ExerciseLibrary(props) {
  return (
    <div>ExerciseLibrary
        {<SearchExercises />}
    </div>
  )
}
