import { useNavigate, useParams } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi"
// import UseFetch from "./UseFetch";

const BlogDetails = ({blogs, isLoading, error}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    // const { data: blog, error, isLoading} = UseFetch('http://localhost:1337/api/blogs?populate=image/' + id)
    // console.log(blog)

    let blog = {}
    if (blog) {
            let arr = blogs.filter(blog => blog.id == id)
            blog = arr[0]
    } else {
            blog = {}
    }
    // console.log(blog)

    const handleBackToBlogs = () => {
        navigate("/")
    }

    return ( 
        <div className="blog-details md:m-24 m-6">
            <h1 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 text-gray-600">Blog Details</h1>
            { isLoading && <h4 className="text-green-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            {blog && (
                <div className="grid sm:grid-cols-2 md:gap-16 gap-8">
                    <img className="mb-4 w-full rounded-lg" src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`} alt="" />
                    <article className="">
                        <h2 className="font-semibold md:text-3xl text-xl text-gray-400">{blog.attributes.title}</h2>
                        <p className="md:text-lg text-green-500 font-medium my-1">Written by: {blog.attributes.author}</p>
                        <div className="md:text-base text-gray-300 font-light">{blog.attributes.content}</div>
                        <button className="flex items-center font-medium bg-green-400 hover:bg-green-600 text-white px-3 py-2 mt-2 rounded-md" onClick={handleBackToBlogs}>
                            <FiChevronsLeft className="mr-1"/> 
                            Back
                        </button>
                    </article>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;