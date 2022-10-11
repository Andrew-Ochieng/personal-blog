import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id)

    return ( 
        <div className="blog-details md:m-16 m-8">
            <h1 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 text-gray-900">Blog Details - <span className="text-pink-500">{id}</span></h1>
            { isLoading && <h4 className="text-pink-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            {blog && (
                <div className="flex justify-center items-center ">
                    <article className="">
                        <h2 className="font-semibold md:text-3xl text-xl">{blog.title}</h2>
                        <p className="text-xl text-pink-500 font-medium">Written by {blog.author}</p>
                        <img className="my-4 w-full" src={blog.image_url} alt="Image url here.." />
                        <div className="text-lg text-gray-800">{blog.body}</div>
                    </article>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;