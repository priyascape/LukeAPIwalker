
import './App.css';
import { Router } from '@reach/router';
import Search from './components/Search';
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Search />

      <Router>

        <Details path="/:category/:id" />

      </Router>
    </div>
  );
}


export default App;
