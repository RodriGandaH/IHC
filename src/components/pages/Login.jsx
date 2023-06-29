import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
                marginTop: '15%',
            }}
        >
            <div
                className="card"
                style={{
                    width: '500px',
                    height: '300px',
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
                                {' '}
                                <Link
                                    style={{
                                        color: '#696868',
                                    }}
                                    to="/registrarse"
                                >
                                    Crear cuenta
                                </Link>
                            </div>
                            <div>{`¿Se olvido la contraseña?`}</div>
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
                                disabled={!username || !password}
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
