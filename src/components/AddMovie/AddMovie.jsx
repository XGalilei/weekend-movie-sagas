import { useHistory } from "react-router-dom";

function AddMovie () {

    const history = useHistory();
    

    const returnToList = () => {
        history.push('/');
    }

    return <div>
        <form>
            <button>Cancel</button>
            <button>Save</button>
        </form>
        <button onClick={returnToList}>Back to List</button>
    </div>;
}

export default AddMovie;