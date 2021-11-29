import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import Footer from "./Footer";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="App">

        <Nav/>

      {/* Header */}
      <Header />
      
      {/* Tinder Cards */}
      <TinderCards />


    </div>
  );
}

export default App;
