import BlogList from "../components/BlogList";
// import { useState } from "react";

const Home = ({blogs, error, isLoading}) => {
  // const [search, setSearch] = useState("")

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   setSearch(e.target.value)
  // }

  // const filteredBlogs = blogs.filter((blog) => blog.attributes.title.toLowerCase().includes(search.toLowerCase()))
  
  // console.log(filteredBlogs)

  return ( 
      <div className="home lg:mx-28 md:mx-12 mx-6 md:my-16 my-8">
        
        { isLoading && <h4 className="text-green-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
        { error && <h4 className="text-red-500">{ error }</h4>}
        


        <BlogList blogs={blogs} error={error} isLoading={isLoading} title = "All Blogs!"/>
        
        {/* filter blogs */}
        <BlogList blogs={blogs.filter((blog) => blog.attributes.author === 'Andrew')} title = "Andrew's Blogs!" />

      </div>
    );
}
 
export default Home;