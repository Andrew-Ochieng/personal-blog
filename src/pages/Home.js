// imports
import { useEffect } from "react";
import { useState } from "react";
import BlogList from "../components/BlogList";

// initial data used with state
// { id:1, title: "Javascript", author: "John Doe", content: "Javascript is cool, yeah"},
// { id:2, title: "Reactjs", author: "Andrew Doe", content: "Reactjs is cool, yeah"},
// { id:3, title: "Vuejs", author: "Jacky Doe", content: "Vuejs is cool, yeah"},
// { id:4, title: "Python", author: "John Doe", content: "Python is cool, yeah"},
// { id:5, title: "Ruby", author: "John Doe", content: "Ruby is pretty cool, yeah"}


const Home = () => {

    const [blogs, setBlogs] = useState([])

      function handleDelete (id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
      }
      
      
      useEffect(() => {
        const api = 'http://localhost:8000/blogs'
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
            <BlogList blogs={blogs.filter((blog) => blog.author === 'John Doe')} title = "John Doe's Blogs!" handleDelete={handleDelete}/>

            
        </div>
     );
}
 
export default Home;