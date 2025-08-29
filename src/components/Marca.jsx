import React, { useEffect, useState } from 'react';
import '../App.css';

const Marca = () => {
    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        const fetchMarcas = async () => {
            const response = await fetch('http://localhost:3000/marca');
            const data = await response.json();
            setMarcas(data);
        };
        fetchMarcas();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4 text-gray-700">
                Marca Component
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-4 py-2 text-center text-gray-600 font-semibold rounded-tl-lg">
                                ID
                            </th>
                            <th className="px-4 py-2 text-center text-gray-600 font-semibold rounded-tr-lg">
                                Denominación
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {marcas.map((marca, idx) => (
                            <tr
                                key={marca.id}
                                className={
                                    idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                }
                            >
                                <td className="px-4 py-2 text-gray-700">
                                    {marca.id}
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                    {marca.denominacion}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Marca;
