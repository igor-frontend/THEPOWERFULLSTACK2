import React from "react";

const VehicleCard = ({ coche }) => {
    return (
        <article className="vehicle-dashboard-card">
            <div className="card-media-wrapper">
                {coche.image && <img src={coche.image} alt={`${coche.marca} ${coche.modelo}`} />}
            </div>
            <div className="card-content-wrapper">
                <h3>{coche.marca} {coche.modelo}</h3>
                <p><strong>Precio:</strong> {coche.precio}€</p>
                <p><strong>Año:</strong> {coche.año}</p>
                <p><strong>Kilómetros:</strong> {coche.kilometros} km</p>
                <p className="vin-text">VIN: {coche.vin}</p>
            </div>
        </article>
    );
};

export default VehicleCard;
