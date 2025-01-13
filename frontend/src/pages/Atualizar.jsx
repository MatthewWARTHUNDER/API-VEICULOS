import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '/Users/Matt/Downloads/API-VEICULOS/frontend/src/components/Navbar';

export function Atualizar() {
    const [id, setId] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState(0);
    const [proprietario, setProprietario] = useState("");
    const [cor, setCor] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log(id, marca, modelo, ano, cor, proprietario);
    }, [id, marca, modelo, ano, cor, proprietario]);

    async function updateVehicle() {
        try {
            await axios.put(`http://localhost:3000/update/${id}`, { marca, modelo, ano, cor, proprietario });
            setMessage("Veículo atualizado com sucesso!"); 
        } catch (error) {
            setMessage("Erro ao atualizar veículo.");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateVehicle();
    }

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg m-20">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID do Veículo</label>
                        <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="proprietario" className="block text-sm font-medium text-gray-700">Proprietário</label>
                        <input
                            type="text"
                            id="proprietario"
                            value={proprietario}
                            onChange={(e) => setProprietario(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="marca" className="block text-sm font-medium text-gray-700">Marca</label>
                        <input
                            type="text"
                            id="marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo</label>
                        <input
                            type="text"
                            id="modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="cor" className="block text-sm font-medium text-gray-700">Cor</label>
                        <input
                            type="text"
                            id="cor"
                            value={cor}
                            onChange={(e) => setCor(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="ano" className="block text-sm font-medium text-gray-700">Ano</label>
                        <input
                            type="number"
                            id="ano"
                            value={ano}
                            onChange={(e) => setAno(Number(e.target.value))}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Atualizar veículo
                        </button>
                    </div>
                </form>

                {message && (
                    <div className="mt-4 text-center text-lg text-blue-600">{message}</div>  
        )}
            </div>
        </>
    );
}
