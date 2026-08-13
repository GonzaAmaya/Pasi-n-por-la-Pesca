import bigua from "../assets/img/bigua_sponsor.webp";
import condor from "../assets/img/condor_sponsor.webp";
import lauquen from "../assets/img/lauquen_sponsor.webp";
import loteros from "../assets/img/loteros_sponsor.webp";
import "./sponsors.css";

function Sponsors() {
    const logos = [bigua, condor, lauquen, loteros]
    const getEstiloLogo = (logo) => {
    if (logo === bigua) return { height: '90px' };
    if (logo === lauquen) return { height: '90px' };
    if (logo === loteros) return { height: '80px' };
    return undefined;
    };

    return(
        <div className="sponsors">
            <div className="sponsors-track">
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                    <img key={index} src={logo} alt={`Sponsor ${index + 1}`} className="sponsor-logo"
                    style={getEstiloLogo(logo)}/>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;