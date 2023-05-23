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
  const { data: categories } = UseFetch('http://localhost:1337/api/categories?populate=*')
  // console.log(categories)

  return (
    <div>
      <BrowserRouter>
        <div className="App m-0 p-0">
          <Navbar />
            <Routes>
              <Route path='/' element={ <Home blogs={blogs} error={error} isLoading={isLoading} /> }/>
              <Route path='/blogs/:id' element={ <BlogDetails blogs={blogs} error={error} isLoading={isLoading} /> }/>
              <Route path='/uidesign' element={ <UIDesign categories={categories.filter((category) => category.attributes.name === "UI/UX Design")} /> }/>
              <Route path='/web' element={ <Web categories={categories.filter((category) => category.attributes.name === "UI/UX Design")} /> }/>
              <Route path='/devops' element={ <Devops categories={categories.filter((category) => category.attributes.name === "UI/UX Design")} /> }/>
              <Route path='/graphics' element={ <Graphics categories={categories.filter((category) => category.attributes.name === "UI/UX Design")} /> }/>
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
