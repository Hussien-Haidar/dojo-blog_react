import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const [isPendingDelete, setIsPendingDelete] = useState(false);
  const History = useHistory();

  const handleClick = () => {

    setIsPendingDelete(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE'
      }).then(() => {
        setIsPendingDelete(false);
        History.push('/');
      });
    }, 1000);
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {!isPendingDelete && <button onClick={handleClick}>Delete Blog</button>}
          {isPendingDelete && <button disabled>Deleting....</button>}
        </article>
      )}
    </div>
  );
}

export default BlogDetails;