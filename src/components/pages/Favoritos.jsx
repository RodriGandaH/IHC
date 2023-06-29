import { recetasFav } from "../../utils/recetas";
import CardFood from "../CardFood";

function Favoritos() {
  return (
    <div className="card " style={{ padding: "2em", marginTop: "2em" }}>
    <div className="row">
      {recetasFav.map((item) => {
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
  );
}

export default Favoritos;
