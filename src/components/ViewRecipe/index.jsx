import ImgReceta from "../../../public/view-receta.svg";
import StartIcon from "../../../public/star.svg";
import { comments } from "../../comments";
import { useState } from "react";

const StarComponent = () => {
  return (
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
    </div>
  );
};

const ViewRecipe = () => {
  const loggedUser = localStorage.getItem("USER");
  const [currentComments, setComments] = useState(comments);
  const [newComment, setComment] = useState("");

  const addComment = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      const copy = [...currentComments];
      copy.push({ comment: newComment });
      setComments(copy);
    }
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h4
              style={{
                marginBottom: "50px",
              }}
              className="card-title"
            >
              Ensaladilla de patata con mayonesa de limón y mostaza
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={ImgReceta} />
              <div>
                <div>Tiempo total __________40 m</div>
                <div>Elaboracion___________10 m</div>
                <div>Coccion______________30 m</div>
                <div>Dificultad: Fácil</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4
              style={{
                marginBottom: "50px",
              }}
              className="card-title"
            >
              Elaboración
            </h4>
            <p>
              Cocemos las patatas lavadas con piel con abundante agua, según su
              tamaño, unos 30 minutos; lo mejor es comprobar el punto pinchando
              con una brocheta en la parte más gruesa. Si entra con facilidad,
              están listas y las podemos retirar. Mientras cocemos los cuatro
              huevos aparte en agua hirviendo con un puñado de sal. Cocemos 11
              minutos, retiramos y los refrescamos con agua helada. Pelamos y
              reservamos. Hacemos la salsa mezclando la mayonesa con la yema, la
              ralladura de limón, la mostaza y la leche. Salpimentamos y
              removemos. Reservamos en la nevera. Pelamos las patatas cuando no
              quemen y semi machacamos con un tenedor, dejando trozos
              irregulares. Salpimentamos ligeramente, añadimos los huevos duros
              troceados (nos reservamos una yema) con la salsa. En el momento de
              servir rallamos la yema de huevo duro que tenemos reservada y
              decoramos con cebollino.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Ingredientes</h4>
            <div>
              <div>Para 4 personas</div>
              <div>Patata nueva ______4</div>
              <div>Mayonesa ________ 200 g</div>
              <div>Ralladura de limón ___ 1</div>
              <div>Mostaza de Dijon ____ 15 ml</div>
              <div>Leche ___________ 30 ml</div>
              <div>Yema de huevo _____ 1</div>
              <div>Huevo ____________ 4</div>
              <div>Pimienta negra molida</div>
              <div>Sal</div>
              <div>Cebollino picado para decorar</div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "15px",
          }}
        >
          <button
            className="btn btn-outline-success"
            type="submit"
            id="btn-registrarse"
            disabled={!loggedUser}
          >
            Calificar
          </button>
          <div
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              borderRadius: "15px",
            }}
          >
            <StarComponent />
          </div>
        </div>
        <h6
          className="card-title"
          style={{
            marginBottom: "15px",
          }}
        >
          Comentarios
        </h6>
        <div className="card">
          <div
            className="card-body"
            style={{
              backgroundColor: "#F4F2F2",
            }}
          >
            <div>
              <div
                style={{
                  height: "250px",
                }}
              >
                {currentComments.map((item) => {
                  return (
                    <div
                      style={{
                        padding: "8px",
                        marginBottom: "5px",
                        borderStyle: "groove",
                        borderRadius: "15px",
                      }}
                    >
                      <div>{item.comment}</div>
                    </div>
                  );
                })}
              </div>
              <div>
                <input
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                    border: "none",
                    padding: "10px",
                  }}
                  placeholder="Deja tu comentario..."
                  disabled={!loggedUser}
                  onChange={(event) => setComment(event.target.value)}
                  onKeyUpCapture={(e) => addComment(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
