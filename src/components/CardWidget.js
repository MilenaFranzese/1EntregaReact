import "./styles/CardWidget.css";
import { FaShoppingCart } from "react-icons/fa";

function CardWidget(){
return(

    <header className="hero is-success">
        <div className="navbar-end">
                <a href="#" className="navbar-link">
                    <span className="icon">
                        <FaShoppingCart />
                    </span>
                </a>
        </div>

    </header>
)
}

export default CardWidget