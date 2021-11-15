import {dataMovies} from './Data';
import {useState} from 'react'
import Filter from './components/Filter/Filter';
import Add from './components/Add/Add';
import MovieList from './components/MovieList/MovieList';
import './App.css';



function App() {
const addMovie =(newMovie)=>{
 setMovieList ( [...movieList,{...newMovie, id:movieList.length+1}]) 
} 

const [searchByName, setSearchByName] = useState('')

const searchName =(name)=>{
  setSearchByName(name)
}


const [movieList, setMovieList] = useState(dataMovies)
const [rating, setRating] = useState(1)

  return (
    <div className="App">
      <Filter searchName={searchName} setRating={setRating}/>
      
      <MovieList movieList={movieList.filter(el => el.title.toUpperCase().includes(searchByName.toUpperCase().trim()) && el.rating >= rating)}/>

      <Add addMovie={addMovie}/>


    </div>
  );
}

export default App;
