// imports
import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import HeroBlog from "../components/HeroBlog";


const Home = () => {

    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true) // set loading data
    const [error, setError] = useState(null)

      function handleDelete (id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
      }
      
      
      useEffect(() => {
        setTimeout(() => {
          fetchBlogs()
        }, 1000);
      }, [])

      const fetchBlogs = () => {
        const api = 'http://localhost:8000/blogs'
        fetch(api)
            .then((res) => {
              // res.json()
              if (!res.ok) {
                throw Error('Could not fetch data from the resource!')
              }
              return res.json()
            })
            .then((data) => {
                // console.log(data)
                setBlogs(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((err) => {
              setIsLoading(false)
              setError(err.message)
            })
      }
    


    return ( 
        <div className="home lg:mx-32 md:mx-16 mx-8 md:my-16 my-8">
          
          { isLoading && <h4 className="text-pink-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
          { error && <h4 className="text-red-500">{ error }</h4>}
            {/* <HeroBlog /> */}

            <BlogList blogs={blogs} handleDelete={handleDelete} title = "All Blogs!"/>
            
            {/* filter blogs */}
            <BlogList blogs={blogs.filter((blog) => blog.title === 'John Doe')} title = "John Doe's Blogs!" handleDelete={handleDelete}/>

            
        </div>
     );
}
 
export default Home;