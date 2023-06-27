<<<<<<< HEAD
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
=======
import { recetasPopulares } from "../../utils/recetas";
import CardFood from "../CardFood";
import P1 from "../../../public/photo1.svg";
import P2 from "../../../public/photo2.svg";
import P3 from "../../../public/photo3.svg";

function Inicio() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div
            style={{
              marginLeft: "10px",
              marginTop: "10%",
            }}
          >
            <h3 className="mb-4">Bienvenido</h3>
            <p className="mb-4">
              Aquí encontrarás una amplia variedad de deliciosas recetas para
              inspirarte en la cocina. Explora nuestras categorías, descubre
              sabores auténticos y comparte tu pasión por la comida. ¡Disfruta
              tu viaje culinario con nosotros!
            </p>
            <button
              className="btn btn-outline-success"
              type="submit"
              id="btn-registrarse"
            >
              Explorar
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10%",
            }}
          >
            <div>
              <img src={P1} />
            </div>
            <div>
              <img src={P2} />
            </div>
            <div
              style={{
                width: "30px",
              }}
            >
              <img src={P3} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginLeft: "10px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h5>Recetas Populares</h5>
          <div
            style={{
              textDecoration: "underline",
              color: "#ff4a22",
              marginRight: "-14%",
            }}
          >
            {"Ver todo >"}
          </div>
        </div>
      </div>
      <div
        className="cards-recetas"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {recetasPopulares.map((item) => (
          <CardFood src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
>>>>>>> 46371705071983501626b33fb12793bd78c5465d
}

export default Inicio;
