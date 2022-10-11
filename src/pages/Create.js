// imports

import { useState } from "react";


const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] =useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, imageUrl, body }

        setIsLoading(true)
        // console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setTimeout(() => {
                console.log('new blog added')
                setIsLoading(false)
            }, 1000);
        })
    
    }


    return ( 
        <div className="form flex items-center justify-center md:my-16 my-8">
            <form onSubmit={handleSubmit} >
                <div className="my-2">
                    <label className="md:text-xl font-medium" htmlFor="title">Title</label><br/>
                    <input 
                        className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" 
                        required
                        type="text" 
                        name="title"  
                        placeholder="Write Title.."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="my-2">
                    <label className="md:text-xl font-medium" htmlFor="author">Author</label><br/>
                    <input 
                        className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" 
                        required
                        type="text" 
                        name="author" 
                        placeholder="Write Name.."
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="my-2">
                    <label className="md:text-xl font-medium" htmlFor="image-url">Image Url</label><br/>
                    <input 
                        className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" 
                        required
                        type="url" 
                        name="imageUrl" 
                        placeholder="Enter Image Url.."
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <div className="my-2">
                    <label className="md:text-xl font-medium" htmlFor="body">Body</label><br/>
                    <textarea 
                        className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" 
                        required
                        name="body" 
                        placeholder="Write Body.." 
                        cols="30" 
                        rows="5"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <button className="w-full py-3 bg-cyan-400 rounded-lg cursor-pointer hover:bg-cyan-500 duration-200">
                    Add Blog
                </button>
            </form>

            <div>
                <p>{title}</p>
                <p>{author}</p>
                <p>{imageUrl}</p>
                <p>{body}</p>
            </div>
            
        </div>
     );
}
 
export default Create;