import { useState } from 'react';

const Home = () => {

    // Define State
    const [blogs, setBlogs] = useState([
        { title: "First Blog", body: "lorem ipsum ...", author: "mario", id: 1 },
        { title: "Welcome Party!", body: "lorem ipsum ...", author: "luigi", id: 2 },
        { title: "Afterwards..", body: "lorem ipsum ...", author: "mario", id: 3 }
    ])

    const handleSubmit = () => {
        console.log("Click entered.")
    }
    // Define a function

    return (
        <div className="home">
            {
                blogs.map((blog) => (
                    <div className="blog-preview">
                        <h1>{blog.title}</h1>
                        <p>Author: {blog.author}</p>
                    </div>
                ))
            }
            <form action={handleSubmit} method="post">
                <label htmlFor="author">Author:</label>
            </form>
        </div>
    );
}

export default Home;