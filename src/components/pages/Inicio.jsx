import CardFood from "../CardFood";

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
              <img src="public/photo1.svg" />
            </div>
            <div>
              <img src="public/photo2.svg" />
            </div>
            <div
              style={{
                width: "30px",
              }}
            >
              <img src="public/photo3.svg" />
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
            marginBottom: "20px"
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
        <CardFood title="Almejas a la marinera" />
        <CardFood title="Humus" src="public/humus.svg" />
        <CardFood title="Pad thai (Thailandia)" src="public/pad.svg" />
        <CardFood
          title="La Bandera (Republica dominicana)"
          src="public/bandera.svg"
        />
      </div>
    </div>
  );
}

export default Inicio;
