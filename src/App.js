import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/:type/:id">
          <PetDetailsPage />
        </Route>
        <Route path="/:type?">
          <HomePage />
        </Route>
        {/* <Route>
          <PetDetailsNotFound path="/404" />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
