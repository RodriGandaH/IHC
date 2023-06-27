import { recetasPopulares, recetasPostres } from "../../utils/recetas";
import CardFood from "../CardFood";

function Recetas() {
  return (
    <div>
      <div
        className="cards-recetas"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          marginLeft: "10px",
        }}
      >
        {recetasPopulares.map((item) => {
          return <CardFood title={item.title} src={item.src} />;
        })}
      </div>
      <div
        className="cards-recetas"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          marginLeft: "10px",
        }}
      >
        {recetasPostres.map((item) => {
          return <CardFood title={item.title} src={item.src} />;
        })}
      </div>
    </div>
  );
}

export default Recetas;
