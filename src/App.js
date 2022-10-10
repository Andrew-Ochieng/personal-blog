// imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetails from './components/BlogDetails';
import Create from './pages/Create';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  // js here
    
 


  return (
    <div>
      <BrowserRouter>
        <div className="App m-0 p-0">
          <Navbar />
          
            <Routes>
              <Route path='/' element={ <Home /> }>
                <Route path='blogdetails' element={ <BlogDetails /> } />
              </Route>
              <Route path='/about' element={ <About /> }/>
              <Route path='/create' element={ <Create /> }/>
            </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
