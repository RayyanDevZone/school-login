import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import Forgot from "./Components/Forgot";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/forgotPassword" element={<Forgot/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
