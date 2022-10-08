const Subscribe = () => {
    return ( 
        <div className="bg-gray-800">
            <div className="md:p-12 p-6 md:flex md:justify-around justify-center items-center ">
                <h1 className="md:text-3xl text-2xl md:mb-0 mb-4 text-gray-100 font-semibold">Subscribe to our newsletter</h1>
                <div className="md:flex space-x-4">
                    <input type="text" className="pl-2 pr-3 py-3 rounded-md" placeholder="Enter Email.."/>
                    <button className="bg-pink-800 hover:bg-pink-700 p-3 rounded-md md:text-lg font-medium text-gray-200">Subscribe</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Subscribe;