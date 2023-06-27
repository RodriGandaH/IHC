import { recetasFav } from "../../utils/recetas";
import CardFood from "../CardFood";

function Favoritos() {
  return (
    <div
      className="cards-recetas"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "5%",
        marginLeft: "10px",
      }}
    >
      {recetasFav.map((item) => {
        return <CardFood title={item.title} src={item.src} />;
      })}
    </div>
  );
}

export default Favoritos;
