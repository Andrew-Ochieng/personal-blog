// imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Create from './pages/Create';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
    // js here


  

  return (
    <Router>
      <div className="App m-0 p-0">
        <Navbar />
        
          <Routes>
            <Route path='./' element={ <Home />}/>
            <Route path='./create' element={ <Create />}/>
          </Routes>
          

        <Footer />
      </div>
    </Router>
  );
}

export default App;
