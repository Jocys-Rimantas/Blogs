
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Meniu from './components/Meniu';
import BlogDetails from './components/BlogDetails';

function App() {

  // Sudademe visus mums reikalingus komponentus kurie sudaris puslapio struktura ir nurodydame ju kelia. 
  return (
        <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/Meniu">
              <Meniu />
            </Route>
            <Route path="/blogs/:id">
            <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
