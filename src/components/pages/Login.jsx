import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
      }}
    >
      <div
        class="card"
        style={{
          width: "500px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div>
          <a className="navbar-brand" href="#">
            <span id="titulo">Recetas</span>.com
          </a>
        </div>
        <div className="card-body">
          <form
            style={{
              width: "350px",
            }}
          >
            <div className="form-group">
              <input
                style={{
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
                type="username"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  borderRadius: "20px",
                }}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div>Crear cuenta</div>
              <div>{`Se olvido la contrasena?`}</div>
            </div>
            <div
              style={{
                margin: "auto",
                width: "50%",
              }}
            >
              <button
                className="btn btn-outline-success"
                type="submit"
                id="btn-registrarse"
                onClick={() => navigate("/")}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
