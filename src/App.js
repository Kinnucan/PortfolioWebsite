import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/Experience" exact>
          <Experience />
        </Route>
        <Route path="/Projects" exact>
          <Projects />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
