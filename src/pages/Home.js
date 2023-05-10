import About from "../components/About";
import BlogList from "../components/BlogList";
import { useState } from "react";

const Home = ({blogs, error, isLoading}) => {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const filteredBlogs = blogs.filter((blog) => blog.attributes.title.toLowerCase().includes(search.toLowerCase()))
  

  return ( 
      <div className="home lg:mx-28 md:mx-12 mx-6 md:my-16 my-8">
        
        { isLoading && <h4 className="text-green-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
        { error && <h4 className="text-red-500">{ error }</h4>}

        <div>
            <form onSubmit={handleSearch} className="flex">
              <input 
                  type='text'
                  value={search}
                  placeholder="Search blogs..."
                  onChange={handleSearch}
                  className="bg-gray-100 outline-none py-2 px-3 mb-4 w-full rounded-full"
              />
              {/* <FiSearch className="absolute z-[100] text-xl" /> */}
            </form>
        </div>

        <BlogList filteredBlogs={filteredBlogs} title = "All Blogs!"/>
        
        {/* filter blogs */}
        <BlogList filteredBlogs={filteredBlogs.filter((blog) => blog.attributes.author === 'Andrew')} title = "Andrew's Blogs!" />

        <About />
          
      </div>
    );
}
 
export default Home;