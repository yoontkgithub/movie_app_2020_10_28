import React, { Component } from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovie = async() => {
    const {data: {data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading: false })
  }

  componentDidMount(){
    this.getMovie();
  }

  render(){
    const { isLoading, movies } = this.state;
    return(
            <>
              { isLoading ? "Loading..." : movies.map((movie) =>{
                return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} key={movie.id + movie.year}/>
              })}
            </>
    ) 
  }
}
export default App;