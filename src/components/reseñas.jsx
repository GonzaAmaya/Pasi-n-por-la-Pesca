import reseña1 from "../assets/img/reseña1.webp";
import reseña2 from "../assets/img/reseña2.webp";
import reseña3 from "../assets/img/reseña3.webp";
import "./reseñas.css";

function Reseñas() {
    const capturas = [reseña1, reseña2, reseña3];

    return(
        <section className="reseñas" id="reseñas">
            <h2>Lo que dicen quienes viajaron con nosotros</h2>
            <div className="reseñas-grid">
                {capturas.map((captura, index) => (
                    <div className="reseña-card" key={index}>
                    <img src={captura} alt={`Reseña de cliente ${index + 1}`} className="reseña-img" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reseñas;