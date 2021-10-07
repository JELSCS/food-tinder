import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import Footer from "./Footer";
import { Route, Switch } from 'react-router-dom';
import HelloPage from './pages/Hello';
import ByePage from './pages/Bye';

function App() {
  return (
    <div className="App">
      <h1>Food Tinder</h1>

      {/* Header */}
      <Header />

      {/* Tinder Cards */}
      <TinderCards />


    </div>
  );
}

export default App;
