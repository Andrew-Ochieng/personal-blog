// imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetails from './components/BlogDetails';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import UseFetch from './components/UseFetch';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  const { data: blogs, error, isLoading} = UseFetch('http://localhost:1337/api/blogs?populate=image')
  // console.log(blogs)

  return (
    <div>
      <BrowserRouter>
        <div className="App m-0 p-0">
          <Navbar />
            <Routes>
              <Route path='/' element={ <Home blogs={blogs} error={error} isLoading={isLoading} /> }/>
              <Route path='/blogs/:id' element={ <BlogDetails blogs={blogs} error={error} isLoading={isLoading} /> }/>
              <Route path='/about' element={ <About /> }/>
              <Route path='/articles' element={ <Articles /> }/>
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
