const BlogList = (props) => {
    const blogs = props.blogs;
    const handleDelete = props.handleDelete

    return (
        <div className="blog-list">
            <h3>All Blogs</h3>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Author: {blog.author}</p>
                        <p>{blog.body}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;