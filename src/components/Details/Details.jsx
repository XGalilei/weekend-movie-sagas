import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Details({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const returnToList = () => {
        history.push('/');
    }

    return <div>

        <button onClick={returnToList}>Back to List</button>
    </div>

}

export default Details;