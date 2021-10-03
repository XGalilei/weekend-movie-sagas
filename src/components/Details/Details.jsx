import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Details({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const returnToList = () => {
        history.push('/');
    }

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