import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <Link to='/addMovie'>Add a Movie</Link>
          <MovieList />

        </Route>

        {/* Details page */}
        <Route path="/details" component={Details} />
        {/* Add Movie page */}
        <Route path='/addMovie' component={AddMovie} />
      </Router>
    </div>
  );
}


export default App;
