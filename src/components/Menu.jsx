import { Link, Outlet } from 'react-router-dom';
function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <span id="titulo">Recetas</span>.com
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                    id="inicio"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/recetas"
                                    id="recetas"
                                >
                                    Recetas
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    id="categorias"
                                >
                                    Categorias
                                </a>
                                <ul className="dropdown-menu pt-0 pb-0">
                                    <li className="">
                                        <Link
                                            className="dropdown-item pt-0 pb-0"
                                            to="/categoria/aperitivos"
                                            id="aperitivos"
                                        >
                                            Aperitivos
                                        </Link>
                                    </li>
                                    <li className="m-0">
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item pt-0 pb-0"
                                            to="/categoria/desayunos"
                                            id="desayunos"
                                        >
                                            Desayunos
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item pt-0 pb-0"
                                            to="/categoria/entradas"
                                            id="entradas"
                                        >
                                            Entradas
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item pt-0 pb-0"
                                            to="/categoria/platos-principales"
                                            id="platos-principales"
                                        >
                                            Platos Principales
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item pt-0 pb-0"
                                            to="/categoria/postres"
                                            id="postres"
                                        >
                                            Postres
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/favoritos"
                                    id="favoritos"
                                >
                                    Favoritos
                                </Link>
                            </li>
                        </ul>
                        <form
                            className="d-flex align-items-center mb-2 mb-lg-0"
                            role="search"
                        >
                            <input
                                className="form-control me-2 bg-light"
                                type="search"
                                placeholder="Buscar..."
                                aria-label="Buscar"
                                id="buscar"
                            ></input>
                            <button
                                className="btn"
                                type="submit"
                                id="btn-buscar"
                            >
                                Buscar
                            </button>
                        </form>
                        <div className="d-flex justify-content-around">
                            <button
                                className="btn ms-3"
                                type="submit"
                                id="btn-iniciar-sesion"
                            >
                                Iniciar Sesión
                            </button>
                            <button
                                className="btn btn-outline-success ms-3"
                                type="submit"
                                id="btn-registrarse"
                            >
                                Registrarse
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Menu;
