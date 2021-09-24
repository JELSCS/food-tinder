import './App.css';
import { Route, Switch } from 'react-router-dom';
import HelloPage from './pages/Hello';
import ByePage from './pages/Bye';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/hello'>
          <HelloPage />
        </Route>
        <Route path='/bye'>
          <ByePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
