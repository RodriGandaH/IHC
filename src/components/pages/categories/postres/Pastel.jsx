import { recetasPostres } from "../../../../utils/recetas";
import CardFood from "../../../CardFood";

function Pastel() {
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
      {recetasPostres.map((item) => {
        return <CardFood title={item.title} src={item.src} />;
      })}
      
    </div>
  );
}

export default Pastel;
