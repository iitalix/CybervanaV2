import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal"
import { useHistory } from "react-router-dom";

export default function ComingSoonModal() {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [errors, setErrors] = useState({});
    const { push } = useHistory();

    return (
        <div id="coming-soon">
            <div>
                <p>
                    Feature Coming Soon!
                </p>
            </div>
        </div>
    )
}
