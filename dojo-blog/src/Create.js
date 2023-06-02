import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario')

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;