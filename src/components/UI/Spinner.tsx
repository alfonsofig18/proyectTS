import { useEffect, useState } from "react";

export const Spinner = (miliseconds: number) => {
    const [spinner, cambiarEstadoSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            cambiarEstadoSpinner(false);
        }, miliseconds);
    }, [])
    // return [spinner];
    return (
        <>
            {
                spinner && (
                    <div className="spinner-loader bg-primary text-white">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                )
            }
        </>
    )
};
