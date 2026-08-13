import { useState } from "react";
import video1 from "../assets/videos/video-hero1.mp4";
import video2 from "../assets/videos/video-hero2.mp4";
import video3 from "../assets/videos/video-hero3.mp4";
import video4 from "../assets/videos/video-hero4.mp4";
import "./hero.css";

function Hero() {
    const videos = [video1, video2, video3, video4];
    const [videoActual,  setVideoActual] = useState(0);

    const siguienteVideo = () => {
        setVideoActual((prev) => (prev + 1) % videos.length)
    };

    return(
        <section className="hero" id="hero">
            <video key={videoActual} 
            className="hero-video" 
            autoPlay 
            muted 
            playsInline 
            onEnded={siguienteVideo}>
                <source src={videos[videoActual]} type="video/mp4" />
            </video>

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <span className="hero-tag">FINES DE SEMANA DE PESCA</span>
                <h2>Vení a vivirlo. <br />Nosotros nos encargamos del resto.</h2>
                <div className="hero-botones">
                    <a href="#viajes" className="btn-hero btn-hero-principal">Ver viajes →</a>
                    <a href="#nosotros" className="btn-hero btn-hero-secundario">Nosotros →</a>
                </div>
            </div>
            
        </section>
    );
}

export default Hero;