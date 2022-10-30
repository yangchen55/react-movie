
import './App.css';
import Button from 'react-bootstrap/Button'
import { Container, Col, Row }from 'react-bootstrap'

import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';


function App() {
  return (
   <div className='wrapper'>
    <Container>
    <Title/>
    <SearchForm/>
    <MovieList/>
  
    </Container>
    </div>
   
    
  
  );
}

export default App;
