import React, {useState} from 'react'

import { Form, Col, Row , Button, Alert} from 'react-bootstrap'
import { CustomCard } from './CustomCard';
import { fetchData } from './utils/axiosHelper';

export const SearchForm = ({func}) => {

    const [form, setForm] = useState("");
    const [movie, setMovie] = useState({})
    const [isError, setIsError] = useState(false)


    // for search form 
    const handleOnChange = (e) => {
        const {value} = e.target;
        setForm(value);
        // console.log(value);
    }

// for submit 

const handleOnSubmit = async (e) => {
// prevent from reloading 
    e.preventDefault();

    // clear the value before loading 
    setMovie({});
    setIsError(false);
    const {data} = await fetchData(form);

    if(data.Response === "True"){
   
    // console.log(response.data);
    setMovie(data);
    }else{
        setIsError(true);
    }
}

 // to remove 
 const removeMovie = (id) => {
  if(!window.confirm("are you sure remove?")){
    return;
  }

  setMovie([]);
}


const handleOnAddToList = (movie ) => {
  // send movie to parent component 
  func(movie)
  // reset the movie to the card so that the movie is not appeared in the custom card 
  setMovie({});
  //  reset the form so no text there 
  setForm("");
}


  return (
    <div className='bg-dark py-5 rounded p-2'>
    <Form onSubmit={handleOnSubmit}>
      <Row className='g-2'>
        
        <Col className='d-flex justify-content-center'>
                
          <div className='d-flex' style={{width:"60%"}}>
          <Form.Control 
          placeholder="movie  name"
          onChange={handleOnChange}
          required
          value = {form}
          />
          </div>
        </Col>
        <div className="d-grid" style={{width:"40%"}}>
         <Button variant = "primary" type='submit' >search</Button>
         </div>
        
      </Row>
    </Form>
    <div className="mt-3 d-flex justify-content-center">
        {" " }

        {/* pass it to the custom card  */}
       
        {movie.imdbID && <CustomCard movie ={movie} func={handleOnAddToList} remov={removeMovie}/>}
        {isError && (
        <Alert variant = "danger">
        no movie found</Alert>
        )}

    </div>
    </div>
  )
  
}
