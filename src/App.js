import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About/About";
import Location from "./Pages/Accommodation/Accommodation";
import Erreur from "./Pages/Error404/Error404";
import Accommodation from "./Pages/Accommodation/Accommodation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/APropos" element={<About />} />
        <Route path="/Accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
