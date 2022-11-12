
import './App.css';
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import { Container, Col, Row }from 'react-bootstrap'

import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';


function App() {
  const[movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    // filter out the movie if it already in the list
    const filteredMovies = movieList.filter(item => 
      item.imdbID !== movie.imdbID)
    // add the incoming movie 

    setMovieList([...filteredMovies, movie]);

  }


   // to delete movie
   const deleteMovie = (id) => {
    if(!window.confirm("are you sure delete?")){
      return;
    }

    setMovieList(movieList.filter(item => 
      item.imdbID !== id));
  }

 


  return (
   <div className='wrapper'>
    <Container>
    <Title/>
    <SearchForm func={addMovie}/>
    <MovieList movieList={movieList}  deleteMovie ={deleteMovie} />
  
    </Container>
    </div>
   
    
  
  );
}

export default App;
