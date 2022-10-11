// imports
// import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import HeroBlog from "../components/HeroBlog";
import useFetch from "../components/useFetch";


const Home = () => {
  const { data: blogs, error, isLoading} = useFetch('https://personal-blogsite.herokuapp.com/blogs')
    

  return ( 
      <div className="home lg:mx-28 md:mx-12 mx-6 md:my-16 my-8">
        
        { isLoading && <h4 className="text-pink-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
        { error && <h4 className="text-red-500">{ error }</h4>}

        <HeroBlog />

        <BlogList blogs={blogs} title = "All Blogs!"/>
        
        {/* filter blogs */}
        <BlogList blogs={blogs.filter((blog) => blog.author === 'Andrew')} title = "Andrew's Blogs!" />

          
      </div>
    );
}
 
export default Home;