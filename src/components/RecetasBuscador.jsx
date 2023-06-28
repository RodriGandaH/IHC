import { useLocation } from 'react-router-dom';
import CardFood from './CardFood';

function RecetasBuscador() {
    const location = useLocation();
    const resultados = location.state.results;

    return (
        <div>
            <h2>Resultados de búsqueda:</h2>
            <div
                className="cards-recetas"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '5%',
                    marginLeft: '10px',
                }}
            >
                {resultados.map((receta) => {
                    return (
                        <CardFood
                            key={receta.id}
                            title={receta.nombre}
                            src={receta.imagen}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default RecetasBuscador;
