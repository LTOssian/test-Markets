import "./Header.css";
import logo from "./assets/logo.svg"
const Header = () => {
    return (
        <div className={"Header"}>
            <header>
                <img src={logo} alt={"Logo for Market"}/>
            </header>
        </div>
    )
}

export default Header;
