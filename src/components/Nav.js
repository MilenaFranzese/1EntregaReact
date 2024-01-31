import CardWidget from "./CardWidget";
import "./styles/Nav.css";

function NavBar({titulo,img, enlace}) {

    return(

        <header className="hero is-success">

            <div className="navbar-brand columns is-vcentered">
                <div className="column is-narrow">
                    <img className="navbar-icon" src={img} alt="imagen"/>
                </div>
                
                <div className="column">
                    <h1 className="title">{titulo}</h1>
                </div>
                
                <div className="navbar-end">

                    <a href="#" className="navbar-link">{enlace}</a>
                    <a href="#" className="navbar-link">{enlace}</a>
                    <CardWidget/>

                </div>
            </div>

        </header>
    )
}

export default NavBar