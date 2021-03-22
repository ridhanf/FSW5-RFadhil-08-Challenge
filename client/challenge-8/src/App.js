import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import PlayerPost from './components/Player/PlayerPost/PlayerPost';
import PlayerPut from './components/Player/PlayerPut/PlayerPut';
import PlayerSearch from './components/Player/PlayerSearch/PlayerSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <header className="App-header">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/create' component={PlayerPost}/>
            <Route path='/update' component={PlayerPut}/>
            <Route path='/search' component={PlayerSearch}/>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
