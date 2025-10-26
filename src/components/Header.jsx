import './../css/Header.css'
import logo from "../images/logo.png";

const Header = () =>{
    return(
        <header id="main-header">
            <img id="logo" src={logo} alt="Logo" />
            <h1>Dogs</h1>
        </header>
    );
};

export default Header;