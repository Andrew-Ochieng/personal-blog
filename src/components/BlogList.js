import { Link } from "react-router-dom";
// import useFetch from "./useFetch";
import { FiChevronsRight } from "react-icons/fi"
import { useState } from "react";

const BlogList = ({ blogs, title }) => {
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(blogs)

  const handleSearch = (e) => {
    e.preventDefault()

    if( search !== "") {
      const filteredItems = blogs.filter((blog) => {
        if(blog.attributes.title === blog.toLowerCase().includes(search.toLowerCase())) {
          return blog
        }
        setFiltered(filteredItems)
      })
    } else {
      console.log("Enter search item...")
    }

  }
  
  return ( 
      
      <>
        <div>
            <form onSubmit={handleSearch}>
              <input 
                  type='text'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-100 outline-none py-2 px-3 mb-4 w-full rounded-md"
              />
            </form>
        </div>

        <div className="blog-list md:mb-32 mb-16">
          <h1 className="md:text-3xl text-2xl font-semibold my-2">{title}</h1>
          <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6">
            { blogs.map((blog) => (
              <div key={blog.id} className="blogs-list bg-gray-200 md:p-3 p-2 rounded-lg my-4">
                <img className="mb-4 w-full rounded-lg" src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`} alt="" />
                <h2 className="font-semibold text-pink-700 md:text-2xl text-xl hover:text-gray-800">{blog.attributes.title}</h2>
                <h3 className="text-sm text-gray-800 font-medium">Written by: {blog.attributes.author}</h3>
                <p className="md:text-base text-sm font-light text-gray-800">{blog.attributes.content.split(/\s+/).slice(0, 20).join(" ")}</p>
                <Link to={`/${blog.id}`} className="mt-2 font-medium md:text-base text-sm text-pink-500 hover:text-pink-700 flex items-center" >
                    Read More
                    <FiChevronsRight className="ml-1"/>              
                  </Link>
              </div>
            ))}
          </div>
        </div>

      </>
    );
}
 
export default BlogList;