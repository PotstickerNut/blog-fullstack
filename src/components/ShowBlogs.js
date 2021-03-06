const ShowBlogs = (props) => {
  const { blogs, handleDelete, handleUpdate } = props;

  return (
    <div className="show-blogs">
      <h1>Show Blogs</h1>
      {blogs &&
        blogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            {blog.user === props.user._id && (
              <span
                className="btn btn-danger"
                onClick={() => handleDelete(blog)}
              >
                X
              </span>
            )}
            {/* {blog.user === props.user._id && ( */}
            <span className="btn btn-info" onClick={() => handleUpdate(blog)}>
              Update
            </span>
            {/* )} */}
          </div>
        ))}
    </div>
  );
};

export default ShowBlogs;
