import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";

export default function Visualizar() {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/veiculos")
            .then(response => {
                setVeiculos(response.data);
            })
            .catch(error => {
                console.log("Erro ao carregar veículos", error);
            });
    }, []);

    return (
        <>
            <Navbar />
                
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">Visualizar Veículos</h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">ID</th>
                            <th className="px-4 py-2 border-b">Marca</th>
                            <th className="px-4 py-2 border-b">Modelo</th>
                            <th className="px-4 py-2 border-b">Ano</th>
                            <th className="px-4 py-2 border-b">Cor</th>
                            <th className="px-4 py-2 border-b">Proprietário</th>
                            <th className="px-4 py-2 border-b">Placa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {veiculos.map((veiculo) => (
                            <tr key={veiculo.id}>
                                <td className="px-4 py-2 border-b">{veiculo.id}</td>
                                <td className="px-4 py-2 border-b">{veiculo.marca}</td>
                                <td className="px-4 py-2 border-b">{veiculo.modelo}</td>
                                <td className="px-4 py-2 border-b">{veiculo.ano}</td>
                                <td className="px-4 py-2 border-b">{veiculo.cor}</td>
                                <td className="px-4 py-2 border-b">{veiculo.proprietario}</td>
                                <td className="px-4 py-2 border-b">{veiculo.placa}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
