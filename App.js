import logo from './logo.svg';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
// import ScriptTag from 'react-script-tag';
function App() {
  return (
  
    <Router>
    <div className="App">
     <Routes>
         <Route path='/' element={ <Home /> }></Route>
     </Routes>
    </div>

    
    </Router>
  );
}

export default App;
