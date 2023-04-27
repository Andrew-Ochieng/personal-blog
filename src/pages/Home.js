import BlogList from "../components/BlogList";
import HeroBlog from "../components/HeroBlog";


const Home = ({blogs, error, isLoading}) => {
  console.log(blogs)
  return ( 
      <div className="home lg:mx-28 md:mx-12 mx-6 md:my-16 my-8">
        
        { isLoading && <h4 className="text-pink-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
        { error && <h4 className="text-red-500">{ error }</h4>}

        <HeroBlog />

        <BlogList blogs={blogs} title = "All Blogs!"/>
        
        {/* filter blogs */}
        <BlogList blogs={blogs.filter((blog) => blog.attributes.author === 'Andrew')} title = "Andrew's Blogs!" />

          
      </div>
    );
}
 
export default Home;