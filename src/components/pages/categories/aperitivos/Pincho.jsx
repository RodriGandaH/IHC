import { aperitivosPinchosBrochetas } from "../../../../utils/recetas";
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
        <div className="row">
          {aperitivosPinchosBrochetas.map((item) => {
            return (
              <>
                <div className="col-sm-12 col-md-5 col-lg-3">
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

export default Pinchos;
