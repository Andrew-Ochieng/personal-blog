// imports
import { Link } from "react-router-dom";
// import BlogDetails from "./BlogDetails";

const BlogList = ({ blogs, title }) => {

  // console.log(blogs)

  
  return ( 
      <div className="blog-list ">
        <h1 className="md:text-3xl text-2xl font-semibold my-2">{title}</h1>
        <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6">
          { blogs.map((blog) => (
            <div key={blog.id} className="blogs-list bg-gray-200 md:p-6 p-4 rounded-lg my-4">
              <img className="mb-4 w-full rounded-lg" src={blog.imageUrl} alt="" />
              <Link to={`/${blog.id}`} className="font-semibold text-pink-700 text-xl hover:text-gray-800">{blog.title}</Link>
              <h3>{blog.author}</h3>
              {/* <button className="bg-green-400 px-3 py-2 mt-2 rounded-md" onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default BlogList;