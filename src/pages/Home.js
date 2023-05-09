import About from "../components/About";
import BlogList from "../components/BlogList";


const Home = ({blogs, error, isLoading}) => {
  // console.log(blogs)

  return ( 
      <div className="home lg:mx-28 md:mx-12 mx-6 md:my-16 my-8">
        
        { isLoading && <h4 className="text-green-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
        { error && <h4 className="text-red-500">{ error }</h4>}


        <BlogList blogs={blogs} title = "All Blogs!"/>
        
        {/* filter blogs */}
        {/* <BlogList blogs={blogs.filter((blog) => blog.attributes.author === 'Andrew')} title = "Andrew's Blogs!" /> */}

        <About />
          
      </div>
    );
}
 
export default Home;