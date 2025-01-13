import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Deletar() {
    const [id, setId] = useState(0);
    const [message, setMessage] = useState("");

    async function deleteVehicle() {
        try {
            await axios.delete(`http://localhost:3000/deletar/${id}`);
            setMessage("Veículo deletado com sucesso!");
        } catch (error) {
            setMessage("Erro ao deletar o veículo.");
        }
    }

    function handleDelete(e) {
        e.preventDefault();
        deleteVehicle();
    }

    return (
        <>
            <nav className="w-full bg-sky-700 flex items-center justify-around">
                <Link to={"/"} className="text-white">
                    Cadastrar
                </Link>
                <Link to={"/Visualizar"} className="text-white">
                    Visualizar
                </Link>
                <Link to={"/Deletar"} className="text-white">
                    Excluir
                </Link>
                <Link to={"/Atualizar"} className="text-white">
                    Atualizar
                </Link>
            </nav>

            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg m-20">
                <h2 className="text-2xl font-semibold text-center mb-4">Deletar Veículo</h2>
                <form onSubmit={handleDelete} className="space-y-6">
                    <div>
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                            ID do Veículo
                        </label>
                        <input
                            type="number"
                            id="id"
                            value={id}
                            onChange={(e) => setId(Number(e.target.value))}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Deletar Veículo
                        </button>
                    </div>
                </form>

                {message && (
                    <div className="mt-4 text-center text-lg text-green-600">{message}</div>
                )}
            </div>
        </>
    );
}
