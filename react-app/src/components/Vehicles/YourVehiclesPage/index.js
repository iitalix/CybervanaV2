import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerVehicles } from "../../../store/vehicles";

export default function YourVehiclesPage() {

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
            {vehicles.map((vehicle) => (

                <div key={vehicle.id}>
                    <img src={vehicle.photoUrl} alt="vehicle"></img>
                </div>

            ))}
        </div>
    )
}
