// imports


const Form = () => {
    return ( 
        <div className="form flex items-center justify-center md:my-16 my-8">
            <form action="#" method="post" >
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="title">Title</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="text" name="title"  placeholder="Write Title.."/>
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="author">Author</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="text" name="author" placeholder="Write Name.."/>
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="image-link">Image Link</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="text" name="image_link" placeholder="Write Name.."/>
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="date">Date</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="date" name="date" placeholder="Date.." />
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="content">Content</label><br />
                        <textarea className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" name="content" placeholder="Write Content.." cols="30" rows="6"></textarea>
                    </div>
                    <input className="w-full py-3 bg-cyan-400 rounded-lg cursor-pointer hover:bg-cyan-500 duration-200" type="submit" value="Add Blog" />
            </form>
            
        </div>
     );
}
 
export default Form;