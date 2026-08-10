import { MessageCircle, Users, Mail, Link as LinkIcon, AtSign } from 'lucide-react';
import contactoData from "./data/contacto.json";
import "./contacto.css";

function Contacto() {
    const iconos = {
    whatsapp: MessageCircle,
    grupo: Users,
    mail: Mail,
    facebook: LinkIcon,
    instagram: AtSign,
    };

    return (
        <section className="contacto" id="contacto">
            <h2>Contactanos</h2>
            <div className="contacto-grid">
            {contactoData.map((c, index) => {
                const Icono = iconos[c.icono];
                return (
                    <a
                        href={c.link}
                        className="contacto-card"
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="contacto-icono">
                            {Icono && <Icono />}
                        </div>
                        <div className="contacto-info">
                            <h3>{c.titulo}</h3>
                            <p>{c.dato}</p>
                        </div>
                    </a>
                );
            })}
        </div>
    </section>
    );
}

export default Contacto;