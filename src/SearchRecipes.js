import React, {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


export default function SearchRecipies() {
const [search, setSearch] = useState("");
const [recipes,setRecipes] = useState([]);

const options = {
    method: 'GET',
    url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    params: {query: (search)},
    headers: {
      'X-RapidAPI-Key': process.env.APIKEY,
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };
const handleSearch = ()=> {
    axios.request(options).then(function (response) {
        console.log(response.data);
        setRecipes(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}
const allRecipes=recipes.map((theRecipe)=> {
    return (
        <Card className = "search-card" style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{theRecipe.title}</Card.Title>
            </Card.Body>
            <Card.Text>View Ingredients</Card.Text>
        </Card>
            
          
    )
})


return (
    <div>
    <center>
        <h1>Search Recipes</h1>
        <div className='exercise-search'>
            <input className="exercise-input" type="search" value={search} placeholder="search recipes" onChange={(e)=> setSearch(e.target.value)}/>
            <button className='search-exercise' onClick={handleSearch}>Search</button>
        </div>
        <div className='container'>
            {allRecipes}
        </div>
    </center>
    </div>
)
}











