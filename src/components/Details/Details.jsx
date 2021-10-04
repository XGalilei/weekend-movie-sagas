import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.currentMovie);
    const [ID, setID] = useState(0); 

    const returnToList = () => {
        history.push('/');
    }

    useEffect(() => {
        //console.log(movie);
        //dispatch({type: 'FETCH_A_MOVIE', payload: movie})
        
    })

    return <div>
        <img src={movie.poster} alt={movie.title}/>
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
        </div>
        <button onClick={returnToList}>Back to List</button>
    </div>

}

export default Details;