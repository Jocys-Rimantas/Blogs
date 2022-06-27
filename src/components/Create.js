import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => { 
  const [title, setTitle] = useState('');
  const [clases, setClases] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();
  
  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, clases, body};

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');   
      history.push('/home');
    })

  }

  return (
    <div className="create">
      <h2>Prideti nauja bloga</h2>
      <form onSubmit={handelSubmit} >
        <label>Recepto pavadinimas:</label>
        <input 
          type="text" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Patiekalo rušis:</label>
        <input 
        type="text" 
        required
        value={clases}
        onChange={(e) => setClases(e.target.value)} 
        />
        
        <label>Patiekalo aprašymas:</label>
        <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Prideti</button>
      </form>
    </div>
  );
}
 
export default Create;