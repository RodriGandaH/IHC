import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumbs from '../utils/Breadcrumbs';
import '../../src/utils/Breadcrumd.css';
import { recetas as data } from '../recetas';
console.log(data);
function Menu() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            const resultados = data.filter((receta) =>
                receta.nombre.toLowerCase().includes(searchQuery.toLowerCase())
            );
            navigate('/buscar', { state: { results: resultados } });
            console.log(resultados);
        }
    };

    const breadcrumbItems = [
        { label: 'Inicio', url: '/' },
        { label: 'Recetas', url: '/recetas' },
        { label: 'Categorias', url: 'categoria/aperitivos/canapes' },
        { label: 'Favoritos', url: '/favoritos' },
    ];

    // Obtener la URL
    const currentUrl = window.location.href;

    // Extraer la sección de la URL
    const currentSection = getCurrentSectionFromUrl(currentUrl);

    // Función para extraer la sección de la URL
    function getCurrentSectionFromUrl(url) {
        const path = new URL(url).pathname;

        const sections = path.split('/').filter((section) => section !== '');
        console.log(sections);
        return sections[sections.length - 1];
    }

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
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <li className="dropdown dropend me-5">
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
                                                <ul
                                                    className="dropdown-menu pt-0 pb-0"
                                                    id="lista-aperitivos"
                                                >
                                                    <li>
                                                        <Link
                                                            className="dropdown-item pt-0 pb-0"
                                                            to="/categoria/aperitivos/canapes"
                                                        >
                                                            Canapés y
                                                            bruschettas
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
                                        </div>
                                        <div
                                            className="me-1"
                                            id="tooltip-container"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-question-circle"
                                                viewBox="0 0 16 16"
                                                id="help"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span id="tool-tip">
                                                Los aperitivos son pequeñas
                                                porciones de comida que se
                                                sirven antes de una comida
                                                principal o en eventos sociales.
                                            </span>
                                        </div>
                                    </div>
                                    <li className="m-0">
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <div className="d-flex justify-content-between">
                                        <div>
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
                                                <ul
                                                    className="dropdown-menu  pt-0 pb-0"
                                                    id="lista-desayunos"
                                                >
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
                                        </div>
                                        <div
                                            className="me-1"
                                            id="tooltip-container"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-question-circle"
                                                viewBox="0 0 16 16"
                                                id="help"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span id="tool-tip">
                                                Las recetas de desayunos están
                                                diseñadas específicamente para
                                                la primera comida del día.{' '}
                                            </span>
                                        </div>
                                    </div>

                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <div className="d-flex justify-content-between">
                                        <div>
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
                                                <ul
                                                    className="dropdown-menu  pt-0 pb-0"
                                                    id="lista-ensaladas"
                                                >
                                                    <li>
                                                        <Link
                                                            className="dropdown-item  pt-0 pb-0"
                                                            to="/categoria/entradas/canapes"
                                                        >
                                                            Canapés y
                                                            bruschettas
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
                                        </div>
                                        <div
                                            className="me-1"
                                            id="tooltip-container"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-question-circle"
                                                viewBox="0 0 16 16"
                                                id="help"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span id="tool-tip">
                                                Estas recetas se refieren a
                                                platos ligeros que se sirven al
                                                comienzo de una comida para
                                                abrir el apetito. Las entradas
                                                suelen ser pequeñas porciones de
                                                alimentos como sopas, ensaladas,
                                                canapés o salsas para mojar.
                                            </span>
                                        </div>
                                    </div>

                                    <li className="m-0">
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <div className="d-flex justify-content-between">
                                        <div>
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
                                                <ul
                                                    className="dropdown-menu  pt-0 pb-0"
                                                    id="lista-fechas-festivas"
                                                >
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
                                        </div>
                                        <div
                                            className="me-1"
                                            id="tooltip-container"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-question-circle"
                                                viewBox="0 0 16 16"
                                                id="help"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span id="tool-tip">
                                                Las recetas para fechas festivas
                                                son platos especiales que se
                                                preparan para celebrar ocasiones
                                                especiales como Navidad,
                                                Carnaval u otras festividades.
                                            </span>
                                        </div>
                                    </div>
                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <div className="d-flex justify-content-between">
                                        <div>
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
                                                <ul
                                                    className="dropdown-menu  pt-0 pb-0"
                                                    id="lista-platos-principales"
                                                >
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
                                        </div>
                                        <div
                                            className="me-1"
                                            id="tooltip-container"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-question-circle"
                                                viewBox="0 0 16 16"
                                                id="help"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span id="tool-tip">
                                                Las recetas de platos
                                                principales son el plato
                                                principal de una comida y
                                                generalmente constan de una
                                                combinación de proteínas (como
                                                carne, pollo o pescado) y
                                                acompañamientos (como arroz,
                                                pasta, verduras o papas). Estas
                                                recetas suelen ser más
                                                sustanciosas y completas que las
                                                entradas.
                                            </span>
                                        </div>
                                    </div>
                                    <li>
                                        <hr className="dropdown-divider m-0" />
                                    </li>
                                    <div className="d-flex justify-content-between">
                                        <div>
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
                                                <ul
                                                    className="dropdown-menu  pt-0 pb-0"
                                                    id="lista-postres"
                                                >
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
                                        </div>
                                        <div
                                            className="me-1"
                                            id="tooltip-container"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-question-circle"
                                                viewBox="0 0 16 16"
                                                id="help"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span id="tool-tip">
                                                Las recetas de postres son
                                                deliciosos y dulces platos que
                                                se sirven al final de una
                                                comida.{' '}
                                            </span>
                                        </div>
                                    </div>
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
                            onSubmit={handleSearch} // Agrega el evento onSubmit al formulario
                        >
                            <input
                                className="form-control me-2 bg-light"
                                type="search"
                                placeholder="Buscar..."
                                aria-label="Buscar"
                                id="buscar"
                                value={searchQuery} // Asigna el valor del input a searchQuery
                                onChange={(e) => setSearchQuery(e.target.value)} // Actualiza searchQuery cuando el usuario escribe en el input
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
                                    navigate('/login');
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
            <Breadcrumbs
                items={breadcrumbItems}
                currentSection={currentSection}
            />
            <Outlet />
        </>
    );
}

export default Menu;
