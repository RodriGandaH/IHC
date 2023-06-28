import { aperitivosPinchosBrochetas, } from "../../../../utils/recetas";
import CardFood from "../../../CardFood";

function Pinchos() {
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
            {aperitivosPinchosBrochetas.map((item) => {
              return <CardFood key={2} title={item.title} src={item.src} />;
            })}
          </div>
        </div>
      );
}

export default Pinchos;
