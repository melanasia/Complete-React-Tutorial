import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario')
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (ev) => {
    // prevent default action of the form being submitted
    ev.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      // turn object into JSON string
      body: JSON.stringify(blog)
      // this is async and returns a promise so we can tack on a 'then' method
    }).then(() => {
      console.log('new blog added')
      setIsLoading(false);
      history.push('/'); //redirect back tp home page as denoted by '/' route
    })
  }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(ev) => setBody(ev.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                  value={author}
                  onChange={(ev) => setAuthor(ev.target.value)}
                >
                  <option value="mario">mario</option> 
                  <option value="yoshi">yoshi</option>
                </select>
                { !isLoading && <button>Add blog</button> }
                { isLoading && <button disabled>Adding blog...</button> }
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;