
import ProfileCard from "./components/ProfileCards";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";
import "bulma/css/bulma.css";

function App(){

    console.log(AlexaImg);
    console.log(CortanaImg);
    console.log(SiriImg);

    return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                    <h1 className="title">Asistentes</h1>
                    </div>
                </section>

                <div className="container"> 
                    <section className="section">

                        <div className="columns">
                            <div className="column is-4">
                            <ProfileCard titulo="Alexa" arroba="@Alexa66" img={AlexaImg}/>
                            </div>

                            <div className="column is-4">
                            <ProfileCard titulo="Cortana" arroba="@Cortana123" img={CortanaImg}/>
                            </div>

                            <div className="column is-4">
                            <ProfileCard titulo="Siri" arroba="@Siri35" img={SiriImg}/>
                            </div>
                        </div>
                
                    </section>
                    </div>
            </div>)
}

export default App