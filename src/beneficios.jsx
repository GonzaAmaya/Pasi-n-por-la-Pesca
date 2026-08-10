import { Truck, Fish, TicketCheck, Tent, UtensilsCrossed, Wallet } from 'lucide-react';
import "./beneficios.css";

function Beneficios() {
    const beneficios = [
    { icono: <Truck size={32} />, titulo: 'Traslado incluido', texto: 'Punto de encuentro y vuelta, sin preocuparte por manejar.' },
    { icono: <TicketCheck size={32} />, titulo: 'Ingreso al Club', texto: 'Coordinamos tu entrada con el club de antemano, vos solo tenés que presentarte y disfrutar.' },
    { icono: <Fish size={32} />, titulo: 'Porción de mojarras', texto: 'Cada participante recibe su porción de mojarras, lista para largar la línea sin vueltas.' },
    { icono: <Tent size={32} />, titulo: 'Alojamiento coordinado', texto: 'Ya está todo organizado, solo tenés que sumarte.' },
    { icono: <UtensilsCrossed size={32} />, titulo: 'Comidas incluidas', texto: 'Desayuno, almuerzo y bebida libre durante todo el viaje.' },    
    { icono: <Wallet size={32} />, titulo: 'Precio todo incluido', texto: 'Sin sorpresas ni gastos extra de último momento.' },
    ];

    return (
        <section className="beneficios" id="beneficio">
        <h2>¿Por qué viajar con nosotros?</h2>
        <div className="beneficios-grid">
            {beneficios.map((b, index) => (
                <div className="beneficio-card" key={index}>
                    <div className="beneficio-icono">{b.icono}</div>
                        <h3>{b.titulo}</h3>
                        <p>{b.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Beneficios;

