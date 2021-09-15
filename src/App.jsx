import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <content>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
          </Switch>
        </content>
      </main>
    </div>
  );
}

export default App;