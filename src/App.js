import NavBar from "./components/Nav";
import ProfileCard from "./components/ProfileCards";
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
                            <ProfileCard titulo="Filodendro Peruviano" arroba="Monstera adansonii" img={Img1}/>
                            </div>

                            <div className="column is-4">
                            <ProfileCard titulo="Costilla de Adan" arroba="Monstera deliciosa" img={Img2}/>
                            </div>

                            <div className="column is-4">
                            <ProfileCard titulo="Gomero variegado" arroba="Ficus Elástica variegado" img={Img3}/>
                            </div>
                        </div>
                
                    </section>
                    </div>
            </div>)
}

export default App