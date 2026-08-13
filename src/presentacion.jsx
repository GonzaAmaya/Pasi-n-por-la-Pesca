import dueños from "./assets/img/dueños.webp";
import "./presentacion.css";

function Presentacion() {
    return(
    <section className="presentacion" id="nosotros">
        <div className="inicio">
            <img className="dueños" src={dueños} alt="Foto Dueños" />
        </div>
        <div className="descripcion">
            <h1>Pasión por la Pesca</h1>
            <p>Somos Edu y Leo, organizamos viajes de pesca de fin de semana a los mejores destinos de Argentina, para que vos solo tengas que preocuparte por disfrutar.</p>

            <p className="dato-destacado">
            🎣 +4 años organizando viajes de pesca <br/>
            📍 +3 destinos <br />
            🏕️ Fines de semana completos</p>

            <a className="cta-btn" href="https://chat.whatsapp.com/Coq2cegZLkKBOj9Ly2brSx?s=cl&p=i&mlu=1" target="_blank" rel="noopener noreferrer">
                Sumate a nuestro grupo de WhatsApp
            </a>
            <p className="cta-nota">Coordinamos los próximos viajes ahí</p>
        </div>
    </section>
    )
}

export default Presentacion;