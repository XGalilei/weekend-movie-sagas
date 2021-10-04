import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genres, setGenres] = useState([]);
    const dispatch = useDispatch();
    const genreList = useSelector(store => store.genres);

    const submitMovie = (event) => {
        event.preventDefault();
        console.log(title, poster, description);
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description
            }
        })
        returnToList();
    }

    const returnToList = () => {
        console.log('returning');
        history.push('/');
    }

    return <div>
        <form onSubmit={submitMovie}>
            <input
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                placeholder="Poster image URL"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
            /><br />

            <label htmlFor="desc">Description</label>
            <textarea id="desc"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            >
            </textarea> <br />
            <select name = "gen" id= "gen" multiple>
            </select>
            {genres.map(genre)}
            <button onClick={returnToList}>Cancel</button>
            <button>Save</button>
        </form>
        <button onClick={returnToList}>Back to List</button>
    </div>;
}

export default AddMovie;