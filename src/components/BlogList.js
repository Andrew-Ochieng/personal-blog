// imports
// import { useState } from "react";

const BlogList = ({ blogs, title, handleDelete }) => {

  console.log(blogs)

  
  return ( 
      <div className="blog-list lg:m-32 md:m-16 m-8">
      <h1 className="md:text-3xl text-2xl font-semibold my-2">{title}</h1>
        <div className="sm:flex sm:space-x-8">
          { blogs.map((blog) => (
            <div key={blog.id} className="blogs-list bg-gray-200 p-8 rounded-md my-4">
              <h1 className="font-semibold">{blog.title}</h1>
              <h3>{blog.author}</h3>
              <p>{blog.body}</p>
              <button className="bg-green-400 px-3 py-2 mt-2 rounded-md" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default BlogList;