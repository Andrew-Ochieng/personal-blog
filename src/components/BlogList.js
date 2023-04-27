import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

  console.log(blogs)

  
  return ( 
      <div className="blog-list md:mb-32 mb-16">
        <h1 className="md:text-3xl text-2xl font-semibold my-2">{title}</h1>
        <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6">
          { blogs.map((blog) => (
            <div key={blog.id} className="blogs-list bg-gray-200 md:p-6 p-3 rounded-lg my-4">
              <img className="mb-4 w-full rounded-lg" src={blog.attributes.image} alt="" />
              <Link to={`/${blog.id}`} className="hover:text-green-600" >
                <h2 className="font-semibold text-pink-700 md:text-2xl text-xl hover:text-gray-800">{blog.title}</h2>
                <h3 className="text-lg text-gray-800 font-medium">Written by: {blog.attributes.author}</h3>
                <p>{blog.attributes.body.split(/\s+/).slice(0, 20).join(" ")}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default BlogList;