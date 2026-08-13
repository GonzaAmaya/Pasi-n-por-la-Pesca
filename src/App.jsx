import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Presentacion from './components/presentacion.jsx';
import Sponsors from './components/sponsors.jsx';
import Viajes from './components/viajes.jsx';
import Beneficios from './components/beneficios.jsx';
import Reseñas from './components/reseñas.jsx';
import Contacto from './components/contacto.jsx';
import Footer from './components/footer.jsx';

function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <Presentacion />
        <Sponsors />
        <Viajes />
        <Beneficios />
        <Reseñas />
        <Contacto />
        <Footer />
        </>
    );
}

export default App;