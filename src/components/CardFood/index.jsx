import { useNavigate } from "react-router-dom";
import StartIcon from "../../../public/star.svg";

// eslint-disable-next-line react/prop-types
const CardFood = ({ title = "Card title", src = "public/receta1.svg" }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          height: "178px",
        }}
      >
        <img
          className="card-img-top"
          src={src}
          alt="Card image cap"
          style={{
            width: "100%",
            overflow: "hidden",
            height: "100%",
          }}
        />
      </div>
      <div className="card-body">
        <h6 className="card-title font-weight-bold text-truncate ">{title}</h6>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="classification">
            <img
              style={{
                marginRight: "5px",
                filter:
                  "invert(63%) sepia(48%) saturate(2841%) hue-rotate(6deg) brightness(106%) contrast(91%)",
              }}
              src={StartIcon}
            />
            <img
              style={{
                marginRight: "5px",
                filter:
                  "invert(63%) sepia(48%) saturate(2841%) hue-rotate(6deg) brightness(106%) contrast(91%)",
              }}
              src={StartIcon}
            />
            <img
              style={{
                marginRight: "5px",
                filter:
                  "invert(63%) sepia(48%) saturate(2841%) hue-rotate(6deg) brightness(106%) contrast(91%)",
              }}
              src={StartIcon}
            />
            <img
              style={{
                marginRight: "5px",
                filter:
                  "invert(63%) sepia(48%) saturate(2841%) hue-rotate(6deg) brightness(106%) contrast(91%)",
              }}
              src={StartIcon}
            />
            <img
              style={{
                marginRight: "5px",
              }}
              src={StartIcon}
            />
          </div>
          <button
            className="btn btn-outline-success"
            id="btn-registrarse"
            onClick={() => navigate("/receta")}
          >
            Ver receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFood;
