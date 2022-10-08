// imports
import { useEffect } from "react";
import { useState } from "react";
import BlogList from "../components/BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState([])

      function handleDelete (id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
      }
      
      
      useEffect(() => {
        const api = 'https://the-wreat-api.herokuapp.com/energy'
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setBlogs(data)
            })
      }, [])
    


    return ( 
        <div className="home">
            
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} title = "All Blogs!"/>}
            
            {/* filter blogs */}
            <BlogList blogs={blogs.filter((blog) => blog.title === 'John Doe')} title = "John Doe's Blogs!" handleDelete={handleDelete}/>

            
        </div>
     );
}
 
export default Home;