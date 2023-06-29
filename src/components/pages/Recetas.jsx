import {
  recetasPopulares,
  recetasPostres,
  aperitivosDipsSalsas,
  aperitivosPinchosBrochetas,
  desayunosPancekesWaffes,
  desayunosTostadasBolleria,
  desayunosHuevos,
  aperitivosCanappesBruschettas,
} from "../../utils/recetas";
import CardFood from "../CardFood";

function Recetas() {
  let aperitivos = [];
  aperitivos = aperitivos.concat(
    aperitivosCanappesBruschettas,
    aperitivosDipsSalsas,
    aperitivosPinchosBrochetas
  );
  let desayunos = [];
  desayunos = desayunos.concat(
    desayunosHuevos,
    desayunosPancekesWaffes,
    desayunosTostadasBolleria
  );
  return (
    <div className="container">
      <div className="card" style={{ padding: "2em", marginTop: "2em" }}>
        <div className="row">
          <div>
            <h5>APERITIVOS</h5>
          </div>
          {aperitivos.map((item) => {
            return (
              <>
                <div className="col-sm-12 col-md-5 col-lg-4">
                  <CardFood key={2} title={item.title} src={item.src} />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card " style={{ padding: "2em", marginTop: "2em" }}>
        <div className="row">
          <div>
            <h5>DESAYUNOS</h5>
          </div>
          {desayunos.map((item) => {
            return (
              <>
                <div className="col-sm-12 col-md-5 col-lg-4">
                  <CardFood key={2} title={item.title} src={item.src} />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card " style={{ padding: "2em", marginTop: "2em" }}>
        <div className="row">
          {recetasPopulares.map((item) => {
            return (
              <>
                <div className="col-sm-12 col-md-5 col-lg-4">
                  <CardFood key={2} title={item.title} src={item.src} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="card " style={{ padding: "2em", marginTop: "2em" }}>
        {" "}
        <div className="row">
          {recetasPostres.map((item) => {
            return (
              <>
                <div className="col-sm-12 col-md-5 col-lg-4">
                  <CardFood key={2} title={item.title} src={item.src} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recetas;
