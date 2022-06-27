import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, /*handleDelete*/}) => {
    // nurodome su kuria informacija is ./Home.js mes dirbsime 
  
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p> { blog.clases}</p>

            <p> { blog.body }</p>
            <p> { blog.id }</p>
           {/*<button onClick={() => handleDelete(blog.id)}>Istrinti</button> */}
           </Link>
          </div>
          // onClick -> sukuriame migtuka ir priskiriam funkcija istrtinti ino 
        ))}
      </div>
    );
  }
   
  export default BlogList;