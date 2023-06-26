import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <h2 id="bienvenido">Bienvenido</h2>

                    <p id="bienvenida">
                        Aqui encontraras una variedad de deliciosas recetas para
                        inspirarte en la cocina. Explora nuestras categorias,
                        descubre sabores auténticos y comparte tu pasión por la
                        comida. !Disfruta de tu viaje culinario con nosotros!
                    </p>
                    <div id="btn-explorar">
                        <Link className="btn" id="explorar">
                            Explorar
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-sm-6">Aqui va el slider</div>
            </div>
        </>
    );
}

export default Inicio;
