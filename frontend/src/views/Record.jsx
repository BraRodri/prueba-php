import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecords } from "../api/record";

export default function Record() {

    const [ records, setRecords ] = useState([])

    useEffect(() => {
        getRecords(setRecords)
    }, [])

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 col-md-10 col-12 text-center mt-5">
                
                <h4 className="mb-2">Prueba de PHP</h4>
                <p>Listado de historial realizado por usuarios</p>
                <Link to={'/'}>Regresar</Link>

                <table className="table table-striped mt-5 mb-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>IP</th>
                            <th>Ciudad</th>
                            <th>Humedad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((info, index) => (
                            <tr key={index}>
                                <td>{info.id}</td>
                                <td>{info.ip}</td>
                                <td>{info.city}</td>
                                <td>{info.humidity}%</td>
                                <td>{info.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
