import Menu from './components/Menu';
import Inicio from './components/pages/Inicio';
import Recetas from './components/pages/Recetas';
import Favoritos from './components/pages/Favoritos';
import { Route, Routes } from 'react-router-dom';
import Aperitivos from './components/pages/categories/Aperitivos';
import Desayunos from './components/pages/categories/Desayunos';
import Entradas from './components/pages/categories/Entradas';
import PlatosPrincipales from './components/pages/categories/PlatosPrincipales';
import Postres from './components/pages/categories/Postres';
function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/recetas" element={<Recetas />} />

                    <Route
                        path="categoria/aperitivos"
                        element={<Aperitivos />}
                    />
                    <Route path="categoria/desayunos" element={<Desayunos />} />
                    <Route path="categoria/entradas" element={<Entradas />} />
                    <Route
                        path="categoria/platos-principales"
                        element={<PlatosPrincipales />}
                    />
                    <Route path="categoria/postres" element={<Postres />} />

                    <Route path="/favoritos" element={<Favoritos />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
