import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> {/**home page route */}
              <Home />
            </Route>

            <Route path="/create"> {/**create page route */}
              <Create />
            </Route>

            <Route path="/blogs/:id"> {/**blog details page route */}
              <BlogDetails />
            </Route>

            <Route path="/*"> {/**any page route not available */}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;