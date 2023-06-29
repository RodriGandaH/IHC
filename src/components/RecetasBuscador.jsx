import { useLocation } from 'react-router-dom';
import CardFood from './CardFood';

function RecetasBuscador() {
    const location = useLocation();
    const resultados = location.state.results;

    return (
        <div>
            {resultados.length === 0 ? (
                <p className="text-center">No se encontraron resultados</p>
            ) : (
                <div>
                    <h3>Resultados de búsqueda</h3>
                    <div
                        className="cards-recetas"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '5%',
                            marginLeft: '10px',
                        }}
                    >
                        {resultados.map((receta) => (
                            <CardFood
                                key={receta.id}
                                title={receta.nombre}
                                src={receta.imagen}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecetasBuscador;
