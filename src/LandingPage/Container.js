import React from 'react';

import Card from 'react-bootstrap/Card';
import dumbbell from '../images/dumbbell.png';
import nutritionicon from '../images/nutritionicon.png';
import searchicon from '../images/searchicon.png';
import ExerciseLibrary from '../ExerciseLibrary';

export default function Containers() {
  return (

    <>
    <div>
      {<ExerciseLibrary />}
    </div>
        <div className='about'>
          <h1 className='about-title'>About</h1>
        </div>  
    <div className='mid-container'>
      <Card className ="about-card" style={{ width: '18rem' }}>
          <Card.Img className= "aboutImg" variant="top" src={dumbbell} />
          <Card.Body>
          <Card.Text>
            Track your workouts <br/> with accuracy
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className ="about-card" style={{ width: '18rem' }}>
          <Card.Img className= "aboutImg" variant="top" src={nutritionicon} />
          <Card.Body>
          <Card.Text>
            Ensure that you stay <br/> up-to-date on your nutrition
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className ="about-card" style={{ width: '18rem' }}>
          <Card.Img className= "aboutImg" variant="top" src={searchicon} />
          <Card.Body>
          <Card.Text>
            Easily view and use exercises or receipies from our extensive library
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

//Track your workouts <br/> with accuracy
//Ensure that you stay <br/> up-to-date on your nutrition
//Easily view and use exercises <br/> or receipies from our extensive library