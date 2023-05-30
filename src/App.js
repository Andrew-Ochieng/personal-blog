// imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetails from './components/BlogDetails';
import Home from './pages/Home';
import UIDesign from './pages/UIDesign';
import Web from './pages/Web';
import UseFetch from './components/UseFetch';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';
import Devops from './pages/Devops';
import Graphics from './pages/Graphics';



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
              <Route path='/uidesign' element={ <UIDesign blogs={blogs.filter((item) => item.attributes.category === "UI/UX Design")} /> } />
              <Route path='/web' element={ <Web blogs={blogs.filter((item) => item.attributes.category === "Web Dev")} /> } />
              <Route path='/devops' element={ <Devops blogs={blogs.filter((item) => item.attributes.category === "Dev Ops")} /> } />
              <Route path='/graphics' element={ <Graphics blogs={blogs.filter((item) => item.attributes.category === "Graphics Design")} /> } />
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
