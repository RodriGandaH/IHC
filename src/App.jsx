import Menu from './components/Menu';
import Inicio from './components/pages/Inicio';
import Recetas from './components/pages/Recetas';
import Favoritos from './components/pages/Favoritos';
import { Route, Routes } from 'react-router-dom';
import Canapes from './components/pages/categories/aperitivos/Canape';
import Pinchos from './components/pages/categories/aperitivos/Pincho';
import Dips from './components/pages/categories/aperitivos/Dips';
import Huevos from './components/pages/categories/desayunos/Huevo';
import Pancakes from './components/pages/categories/desayunos/Pancake';
import Tostadas from './components/pages/categories/desayunos/Tostada';
import Empanadas from './components/pages/categories/entradas/Empanada';
import Ensaladas from './components/pages/categories/entradas/Ensalada';
import Sopas from './components/pages/categories/entradas/Sopa';
import Tapas from './components/pages/categories/entradas/Tapa';
import Carnaval from './components/pages/categories/fechas_festivas/Navidad'
import DiaDeLosMuertos from './components/pages/categories/fechas_festivas/Dia_de_los_muertos'
import Navidad from './components/pages/categories/fechas_festivas/Navidad'
import SemanaSanta from './components/pages/categories/fechas_festivas/Semana_santa'
import Carnes from './components/pages/categories/platos-principales/Carne';
import Pastas from './components/pages/categories/platos-principales/Pasta';
import Pescados from './components/pages/categories/platos-principales/Pescado';
import Pollo from './components/pages/categories/platos-principales/Pollo';
import Vegetariano from './components/pages/categories/platos-principales/Vegetariano';
import Pastel from './components/pages/categories/postres/Pastel';
import Tarta from './components/pages/categories/postres/Tarta';
import Login from './components/pages/Login';
import RecetaDetail from './components/RecetaDetail';

function App() {

    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/recetas" element={<Recetas />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/receta" element={<RecetaDetail />} />
                    
                    <Route
                        path="categoria/aperitivos/canapes"
                        element={<Canapes />}
                    />
                    <Route
                        path="categoria/aperitivos/dips"
                        element={<Dips />}
                    />
                    <Route
                        path="categoria/aperitivos/pinchos"
                        element={<Pinchos />}
                    />
                    <Route
                        path="categoria/desayunos/huevos"
                        element={<Huevos />}
                    />
                    <Route
                        path="categoria/desayunos/pancakes"
                        element={<Pancakes />}
                    />
                    <Route
                        path="categoria/desayunos/pinchos"
                        element={<Pinchos />}
                    />
                    <Route
                        path="categoria/desayunos/tostadas"
                        element={<Tostadas />}
                    />

                    <Route
                        path="categoria/entradas/canapes"
                        element={<Canapes />}
                    />
                    <Route
                        path="categoria/entradas/empanadas"
                        element={<Empanadas />}
                    />
                    <Route
                        path="categoria/entradas/ensaladas"
                        element={<Ensaladas />}
                    />
                    <Route
                        path="categoria/entradas/sopas"
                        element={<Sopas />}
                    />
                    <Route
                        path="categoria/entradas/tapas"
                        element={<Tapas />}
                    />

                    <Route
                        path="categoria/fechas_festivas/Carnaval"
                        element={<Carnaval />}
                    />
                    
                    <Route
                        path="categoria/fechas_festivas/DiaDeLosMuertos"
                        element={<DiaDeLosMuertos />}
                    />

                    <Route
                        path="categoria/fechas_festivas/Navidad"
                        element={<Navidad />}
                    />

                    <Route
                        path="categoria/fechas_festivas/SemanaSanta"
                        element={<SemanaSanta/>}
                    />

                    <Route
                        path="categoria/platos-principales/carnes"
                        element={<Carnes />}
                    />

                    <Route
                        path="categoria/platos-principales/pastas"
                        element={<Pastas />}
                    />
                    <Route
                        path="categoria/platos-principales/pescados"
                        element={<Pescados />}
                    />

                    <Route
                        path="categoria/platos-principales/pollo"
                        element={<Pollo />}
                    />
                    <Route
                        path="categoria/platos-principales/vegetariano"
                        element={<Vegetariano />}
                    />

                    <Route
                        path="categoria/postres/pasteles"
                        element={<Pastel />}
                    />
                    <Route
                        path="categoria/postres/tartas"
                        element={<Tarta />}
                    />

                    <Route path="/favoritos" element={<Favoritos />} />
                </Route>
            </Routes>            
        </div>
    );
}

export default App;
