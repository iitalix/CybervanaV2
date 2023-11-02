import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getOwnerVehicles } from "../../../store/vehicles";
import OpenModalButton from "../../OpenModalButton";

export default function YourVehiclesPage() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
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
                    <img src={vehicle.photoUrl}></img>
                </div>

            ))}

        </div>
    )
}
