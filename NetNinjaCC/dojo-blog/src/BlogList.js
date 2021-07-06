import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const blogs = props.blogs;

    return (
        <div className="blog-list">
            <h3>All Blogs</h3>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Author: {blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;