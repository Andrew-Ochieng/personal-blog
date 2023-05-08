import axios from "axios";
import { useState } from "react";


const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const blog = { title, author, image, body }

        axios.post('http://localhost:1337/api/blogs', {
            title,
            author,
            image,
            body
          })
          .then(function (response) {
            console.log(response);

            alert('You added a new blog successfully!')
          })
          .catch(function (error) {
            console.log(error);
          });

        // fetch('http://localhost:1337/api/blogs/' , {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(blog)
        // }).then(() => {
        //     setTimeout(() => {
        //         // clear inputs after submit
        //         setTitle('')
        //         setAuthor('')
        //         setImage('')
        //         setBody('')

        //     }, 1000);
        //     alert('You added a new blog successfully!')
        // })
    
    }


    return ( 
        <div className="form flex items-center justify-center md:my-16 my-8 md:mx-24 mx-6">
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
                        type="file" 
                        name="image" 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
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
                <button className="w-full py-3 text-white font-semibold uppercase bg-cyan-400 rounded-lg cursor-pointer hover:bg-cyan-500 duration-200">
                    Add Blog
                </button>
            </form>
            
        </div>
     );
}
 
export default Create;