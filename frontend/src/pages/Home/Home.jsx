import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { API_BASE_URL } from "../../config/api";
import "./Home.css";
import VehicleCard from "../../components/VehicleCard/VehicleCard";

const Home = () => {
    const { data: vehiculos, loading, error } = useFetch(`${API_BASE_URL}/vehiculos`);
    const [filtroMarca, setFiltroMarca] = useState("");

    if (loading) return <div className="loading-msg">Cargando flota automotriz del concesionario...</div>;
    if (error) return <div className="main-container"><div className="error-msg">Error de conexión: {error}</div></div>;

    const cochesFiltrados = vehiculos ? vehiculos.filter(c => 
        (c.marca && c.marca.toLowerCase().includes(filtroMarca.toLowerCase())) ||
        (c.modelo && c.modelo.toLowerCase().includes(filtroMarca.toLowerCase()))
    ) : [];

    return (
        <div className="main-container">
            <header className="home-dashboard-header">
                <div>
                    <h1>Gestión de Stock de Vehículos</h1>
                    <p>Catálogo centralizado extraído dinámicamente desde semilla de datos</p>
                </div>
                <input 
                    type="search" 
                    placeholder="Filtrar por marca o modelo (ej: Toyota)..." 
                    className="search-dashboard-input"
                    value={filtroMarca}
                    onChange={(e) => setFiltroMarca(e.target.value)}
                />
            </header>

             <div className="vehicles-grid-layout" style={{ width: "100%", padding: "20px 0" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: "24px",
                    width: "100%"
                }}>
                    {cochesFiltrados.map((coche) => (
                        <div key={coche._id} style={{ display: "flex", width: "100%" }}>
                            <VehicleCard coche={coche} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;