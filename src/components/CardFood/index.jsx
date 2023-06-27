const CardFood = ({ title = "Card title", src = "public/receta1.svg" }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <img className="card-img-top" src={src} alt="Card image cap" />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>

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
              src="public/star.svg"
            />
            <img
              style={{
                marginRight: "5px",
                filter:
                  "invert(63%) sepia(48%) saturate(2841%) hue-rotate(6deg) brightness(106%) contrast(91%)",
              }}
              src="public/star.svg"
            />
            <img
              style={{
                marginRight: "5px",
                filter:
                  "invert(63%) sepia(48%) saturate(2841%) hue-rotate(6deg) brightness(106%) contrast(91%)",
              }}
              src="public/star.svg"
            />
            <img
              style={{
                marginRight: "5px",
                filter:
                  "invert(63%) sepia(48%) saturate(2841%) hue-rotate(6deg) brightness(106%) contrast(91%)",
              }}
              src="public/star.svg"
            />
            <img
              style={{
                marginRight: "5px",
              }}
              src="public/star.svg"
            />
          </div>
          <button className="btn btn-outline-success" id="btn-registrarse">
            Ver receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFood;
