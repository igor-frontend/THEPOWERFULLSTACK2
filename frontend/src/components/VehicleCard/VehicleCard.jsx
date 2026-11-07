import React from "react";

const VehicleCard = ({ coche }) => {
    return (
        <article className="vehicle-dashboard-card">
            <div className="card-media-wrapper">
                {coche.image && (
                    <img 
                        src={coche.image} 
                        alt={`${coche.marca} ${coche.modelo}`} 
                        className="vehicle-card-img"
                    />
                )}
            </div>
            <div className="card-content-wrapper">
                <h3>{coche.marca} {coche.modelo}</h3>
                <p><strong>Precio:</strong> <span className="price-tag">{coche.precio}€</span></p>
                <p><strong>Año:</strong> {coche.año || "N/D"}</p>
                <p><strong>Kilómetros:</strong> {coche.kilometros ? `${coche.kilometros} km` : "0 km"}</p>
                <p className="vin-text"><code>VIN: {coche.vin}</code></p>
            </div>
        </article>
    );
};

export default VehicleCard;