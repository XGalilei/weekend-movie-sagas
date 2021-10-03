import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const getDetails = (event) => {
        event.preventDefault();
        console.log('testing');
        console.log(event.target.id);
        history.push(`/details/${event.target.id}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} 
                            id={movie.id}
                            onClick={getDetails}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;