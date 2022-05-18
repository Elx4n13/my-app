import React, { useState } from 'react'
import SearchInput from '../../components/searchInput/SearchInput'
import filmApi from '../../api/filmApi';
import FilmLists from '../../components/FilmLists/FilmLists';
import './main.scss'
const Main = () => {
  const [movies, setMovies] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const searchText = new FormData(e.target).get("movies");
    console.log(searchText)
    try {
      const _movies = (await filmApi.searchMovies(searchText)).Search

      setMovies(_movies);
    } catch (error) {
      console.log(error);
      setMovies([])
    }
  };

  return (
    <div className='container'>
      <div className='left'>
        <SearchInput searchFun={handleSubmit} />
        <FilmLists moviesList={movies} />
      </div>
      <div className="right">
      </div>
    </div>
  )
}

export default Main