import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // Define State
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // Define a function

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not retrieve data from the server. Please try again.')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                })
        }, 1000
        )
    }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;