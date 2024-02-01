import NavBar from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";
import Icon from "./img/icon-plant.png"
import Img1 from "./img/img(1).jpg";
import Img2 from "./img/img(2).jpg";
import Img3 from "./img/img(3).jpg";
import "bulma/css/bulma.css";

function App(){

    console.log(Img1);
    console.log(Img2);
    console.log(Img3);

    return (
            <div>
                <NavBar titulo="Vivero Online" enlace="Link" img={Icon}/>

                <div className="container"> 
                    <section className="section">

                        <div className="columns">
                            <div className="column is-4">
                            <ItemListContainer titulo="Filodendro Peruviano" detalle="Monstera adansonii" img={Img1}/>
                            </div>

                            <div className="column is-4">
                            <ItemListContainer titulo="Costilla de Adan" detalle="Monstera deliciosa" img={Img2}/>
                            </div>

                            <div className="column is-4">
                            <ItemListContainer titulo="Gomero variegado" detalle="Ficus Elástica variegado" img={Img3}/>
                            </div>
                        </div>
                
                    </section>
                    </div>
            </div>)
}

export default App