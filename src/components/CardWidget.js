import { FaShoppingCart } from "react-icons/fa";
import "./styles/CardWidget.css"

function CardWidget(){
return(

    <header className="hero is-success">
        <div className="navbar-end">
                <a href="#" className="navbar-item">
                    <span className="icon navbar-icon"> 
                    <FaShoppingCart style={{ fontSize: "3em" }} />
                        <span className="cart-counter">0</span>
                    </span>
                </a>
        </div>

    </header>
)
}

export default CardWidget