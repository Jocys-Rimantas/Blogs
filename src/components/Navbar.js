import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
   <nav className="navbar">
        <h1>Maisto blogas</h1>
        {/*Nurodome visus react migtuko kelius*/}
        <div className="links">
        <Link to="/meniu">Pradinis puslapis</Link>
        <Link to="/create">Sukurti bloga </Link>
        <Link to="/home">Visi receptai</Link>
        </div>
    </nav>
 );
} 
 
export default Navbar;