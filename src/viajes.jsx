import viajesData from "./data/viajes.json";
import "./viajes.css";

function Viajes() {
    return(
        <section className="viajes" id="viajes">
            <h2>Nuestros Viajes</h2>
            <div className="viajes-grid">
                {viajesData.map((viaje, index) => (
                    <div className="viaje-card" key={index}>
                        {viaje.imagen && (
                            <img src={viaje.imagen} alt={viaje.nombre} className="viaje-img" />
                        )}

                        <div className="viaje-info">
                            <h3>{viaje.nombre}</h3>
                            <span className="viaje-ubicacion">📍 {viaje.ubicacion}</span>
                            <p>{viaje.descripcion}</p>

                            {viaje.mapaEmbed && (
                                <iframe
                                    src={viaje.mapaEmbed}
                                    width="100%"
                                    height="180"
                                    style={{ border: 0, borderRadius: '8px', marginTop: '1rem' }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Ubicación de ${viaje.nombre}`}
                                ></iframe>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Viajes;