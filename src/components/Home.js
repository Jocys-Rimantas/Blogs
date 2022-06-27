import BlogList from "./BlogList";
import useFetch from "./Fetch";

// importuojame koda is Fetch komponento. 
const Home = () => {
  const {data, isPeding, error} = useFetch('http://localhost:8000/blogs');

    //  handleDelete - >  sukurtam migtukui prikiriam funkcija, kad istrinti info 
    // sukuriame nauja kitamaji newBlogs kuriame isaugosime nauja reiksme kuria veliau perduosime i setBlogs
    // jeigu funkcija atitinka musu nurodymus. 

   /* const handleDelete =(id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs (newBlogs);
    } */
   
   return (
    //  handleDelete - >  sukurtam migtukui priskiriama   funkcija, kad istrinti info 
      <div className="home">
        { error && <div> {error}</div>}
        { isPeding && <div> Loading...</div>}
        { data && <BlogList blogs={data} title="Visi receptai" /* handleDelete={handleDelete} *//>}
       </div>
       // filter padeda isfiltruoti reikia info pagal musu nurodymys 
      );
    }
     
    export default Home;