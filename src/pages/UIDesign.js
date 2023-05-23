const UIDesign = ({categories}) => {
    // const item = categories.attributes.blogs.name

    console.log(categories)
    return ( 
        <>
        UI Design here...
            {/* <div className="blog-list md:mb-24 mb-16">
            <h1 className="md:text-3xl text-2xl font-semibold my-2">{title}</h1>
            <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6">
                { categories.map((category, index) => (
                <div key={index} className="blogs-list bg-gray-300 p-2 rounded-lg my-4 shadow-lg hover:shadow-xl shadow-gray-500 hover:shadow-gray-700">
                    <img className="mb-4 md:h-48 h-36 w-full rounded-lg" src={`http://localhost:1337${category.attributes.image.data.attributes.url}`} alt="" />
                    <h2 className="font-semibold text-green-700 md:text-xl text-lg hover:text-gray-800">{category.attributes.title}</h2>
                    <h3 className="text-sm text-gray-800 font-medium">Written by: {category.attributes.author}</h3>
                    <p className="md:text-sm text-xs font-light text-gray-800">{category.attributes.content.split(/\s+/).slice(0, 20).join(" ")}</p>
                    <Link to={`/blogs/${category.id}`} className="mt-2 font-medium md:text-base text-sm text-green-500 hover:text-green-700 flex items-center" >
                        Read More
                        <FiChevronsRight className="ml-1"/>              
                    </Link>
                </div>
                ))}
            </div>
            </div> */}
        </>
     );
}
 
export default UIDesign;