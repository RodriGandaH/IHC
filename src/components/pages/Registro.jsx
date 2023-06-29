import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Registro = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [correo, setCorreo] = useState('');
    const handleLogin = () => {
        localStorage.setItem('USER', username);
        navigate('/');
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1%',
            }}
        >
            <div
                className="card"
                style={{
                    width: '500px',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px',
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
                            width: '350px',
                        }}
                    >
                        <div className="form-group">
                            <input
                                style={{
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                }}
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nombres"
                                value={nombre}
                                onChange={(event) =>
                                    setNombre(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={{
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                }}
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Apellidos"
                                value={apellido}
                                onChange={(event) =>
                                    setApellido(event.target.value)
                                }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                style={{
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                }}
                                type="date"
                                required
                                className="form-control"
                                id="exampleInputEmail1"
                                value={fechaNacimiento}
                                onChange={(event) =>
                                    setFechaNacimiento(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={{
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                }}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="correo@email.com"
                                value={correo}
                                onChange={(event) =>
                                    setCorreo(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={{
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                }}
                                type="username"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Username"
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={{
                                    borderRadius: '20px',
                                }}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '20px',
                                marginBottom: '20px',
                            }}
                        >
                            <div>
                                <Link
                                    style={{
                                        color: '#696868',
                                    }}
                                    to="/login"
                                >
                                    ¿Ya tienes una cuenta?
                                </Link>
                            </div>
                        </div>
                        <div
                            style={{
                                margin: 'auto',
                                width: '50%',
                            }}
                        >
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                id="btn-registrarse"
                                onClick={handleLogin}
                                disabled={
                                    !username ||
                                    !password ||
                                    !nombre ||
                                    !apellido ||
                                    !fechaNacimiento ||
                                    !correo
                                }
                            >
                                Crear cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registro;
