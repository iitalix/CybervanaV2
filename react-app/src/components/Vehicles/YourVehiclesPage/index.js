import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerVehicles } from "../../../store/vehicles";
import VehicleCard from "../VehicleCard";

export default function YourVehiclesPage() {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const ownerVehicles = useSelector((state) => state.vehicles.ownerVehicles)
    const arrOwnerVehicles = Object.values(ownerVehicles);
    const vehicles = [...arrOwnerVehicles];

    useEffect(() => {
        dispatch(getOwnerVehicles());
    }, [dispatch])

    return (
        <div>
            <h1>Your Vehicles</h1>
            <div className="vehicles-parent-container">
                {vehicles.map((vehicle) => (

                    <div key={vehicle.id} className="vehicle-card">
                        <VehicleCard vehicle={vehicle} user={user} />
                    </div>
                ))}
            </div>
        </div>
    )
}
