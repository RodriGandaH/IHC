import { Link, Outlet, useNavigate } from 'react-router-dom';
import Breadcrumb from '../utils/Breadcrumb'
import '../../src/utils/Breadcrumd.css'
function Menu() {
    const navigate = useNavigate();
    const breadcrumbItems = [
        { label: 'Inicio', url: '/' },
        { label: 'recetas', url: '/recetas' },
        { label: 'Categorias', url: '/products/category' },
        { label: 'Favoritos', url: '/products/category/product' },
      ];
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
                                    data-bs-auto-close="outside"
                                >
                                    Categorias
                                </a>
                                <ul className="dropdown-menu pt-0 pb-0">
                                    <li className="dropdown dropend">
                                        <Link
                                            className="dropdown-item dropdown-toggle pt-0 pb-0"
                                            id="aperitivos"
                                            data-bs-auto-close="outside"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Aperitivos
                                        </Link>
                                        <ul className="dropdown-menu pt-0 pb-0">
                                            <li>
                                                <Link
                                                    className="dropdown-item pt-0 pb-0"
                                                    to="/categoria/aperitivos/canapes"
                                                >
                                                    Canapés y bruschettas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item pt-0 pb-0"
                                                    to="/categoria/aperitivos/dips"
                                                >
                                                    Dips y Salsas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item pt-0 pb-0"
                                                    to="/categoria/aperitivos/pinchos"
                                                >
                                                    Pinchos y brochetas
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="m-0">
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li className="dropdown dropend">
                                        <Link
                                            className="dropdown-item dropdown-toggle pt-0 pb-0"
                                            id="desayunos"
                                            data-bs-auto-close="outside"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Desayunos
                                        </Link>
                                        <ul className="dropdown-menu  pt-0 pb-0">
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/desayunos/huevos"
                                                >
                                                    Huevos
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/desayunos/pancakes"
                                                >
                                                    Pancakes y waffles
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/desayunos/pinchos"
                                                >
                                                    Pinchos y brochetas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/desayunos/tostadas"
                                                >
                                                    Tostadas y bollería
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li className="dropdown dropend">
                                        <Link
                                            className="dropdown-item dropdown-toggle pt-0 pb-0"
                                            id="entradas"
                                            data-bs-auto-close="outside"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Entradas
                                        </Link>
                                        <ul className="dropdown-menu  pt-0 pb-0">
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/canapes"
                                                >
                                                    Canapés y bruschettas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/empanadas"
                                                >
                                                    Empanadas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/ensaladas"
                                                >
                                                    Ensaladas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/sopas"
                                                >
                                                    Sopas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/tapas"
                                                >
                                                    Tapas
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="dropdown dropend">
                                        <Link
                                            className="dropdown-item dropdown-toggle pt-0 pb-0"
                                            id="entradas"
                                            data-bs-auto-close="outside"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Fechas festivas 
                                        </Link>
                                        <ul className="dropdown-menu  pt-0 pb-0">
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/fechas_festivas/carnaval"
                                                >
                                                    Carnaval
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/empanadas"
                                                >
                                                    Dia de los muertos
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/ensaladas"
                                                >
                                                    Navidad
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/entradas/sopas"
                                                >
                                                    Semana Santa
                                                </Link>
                                            </li>                                                                                      
                                        </ul>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li className="dropdown dropend">
                                        <Link
                                            className="dropdown-item dropdown-toggle pt-0 pb-0"
                                            id="platos-principales"
                                            data-bs-auto-close="outside"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Platos Principales
                                        </Link>
                                        <ul className="dropdown-menu  pt-0 pb-0">
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/platos-principales/carnes"
                                                >
                                                    Carnes
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/platos-principales/pastas"
                                                >
                                                    Pastas
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/platos-principales/pescados"
                                                >
                                                    Pescados y mariscos
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/platos-principales/pollo"
                                                >
                                                    Pollo y aves
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/platos-principales/vegetariano"
                                                >
                                                    Vegetariano
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <li className="dropdown dropend">
                                        <Link
                                            className="dropdown-item dropdown-toggle pt-0 pb-0"
                                            id="postres"
                                            data-bs-auto-close="outside"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Postres
                                        </Link>
                                        <ul className="dropdown-menu  pt-0 pb-0">
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/postres/pasteles"
                                                >
                                                    Pasteles
                                                </Link>
                                            </li>
                                            <li className="m-0">
                                                <hr className="dropdown-divider m-0" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item  pt-0 pb-0"
                                                    to="/categoria/postres/tartas"
                                                >
                                                    Tartas
                                                </Link>
                                            </li>
                                        </ul>
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
                                onClick={() => {
                                    navigate("/login")
                                }}
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
            <Breadcrumb items={breadcrumbItems} />
            <Outlet />
            
        </>
    );
}
export default Menu;