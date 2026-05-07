import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import AboutMe from './aboutMe';
import Skills from './skills';
import Portofolio from './portofolio';
import Footer from './footer';
import Navebar from './day2&3/companents/navebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './day2&3/pages/login/login';
import Notfound from './day2&3/companents/Notfound';
import Register from './day2&3/pages/register/register';
import Home from './day2&3/pages/movies/home';
import Favorites from './day2&3/pages/favorites/favortites';
import MovieDetails from './day2&3/pages/movieDetails/movieDetails';
import { Provider } from 'react-redux';

function App() {
  return (
    <Router>
      <Navebar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetails} exact />
        <Route path="/favorites" component={Favorites} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
