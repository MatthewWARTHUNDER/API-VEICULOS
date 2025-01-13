import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

function App() {
  const [message, setMessage] = useState("");  
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState(0);
  const [proprietario, setProprietario] = useState("");
  const [cor, setCor] = useState("");

  useEffect(() => {
    console.log(marca, modelo, ano, cor, proprietario);
  }, [marca, modelo, ano, cor, proprietario]);

  async function RegisterNewVehicle() {
    try {
      await axios.post("http://localhost:3000/cadastrar", { marca, modelo, ano, cor, proprietario });
      setMessage("Veículo registrado com sucesso!");  
    } catch (error) {
      setMessage("Erro ao registrar veículo.");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    RegisterNewVehicle();
  }

  async function updateVehicle() {
    await axios.put(`http://localhost:3000/update/${id}`, { marca, modelo, ano, cor, proprietario });
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateVehicle();
  }

  async function deleteVehicle() {
    await axios.delete(`http://localhost:3000/deletar/${id}`, { marca, modelo, ano, cor, proprietario });
  }

  function handleDelete(e) {
    e.preventDefault();
    deleteVehicle();
  }

  async function SelecionarVeiculo() {
    await axios.get(`http://localhost:3000/selecionarallporid/${id}`, { marca, modelo, ano, cor, proprietario });
  }

  function handleSelect(e) {
    e.preventDefault();
    SelecionarVeiculo();
  }

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg m-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="proprietario" className="block text-sm font-medium text-gray-700">Proprietário</label>
            <input type="text" id="proprietario" onChange={(e) => setProprietario(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <div>
            <label htmlFor="marca" className="block text-sm font-medium text-gray-700">Marca</label>
            <input type="text" id="marca" onChange={(e) => setMarca(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <div>
            <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo</label>
            <input type="text" id="modelo" onChange={(e) => setModelo(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <div>
            <label htmlFor="cor" className="block text-sm font-medium text-gray-700">Cor</label>
            <input type="text" id="cor" onChange={(e) => setCor(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <div>
            <label htmlFor="ano" className="block text-sm font-medium text-gray-700">Ano</label>
            <input type="number" id="ano" onChange={(e) => setAno(Number(e.target.value))} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>

          <div className="flex space-x-4">
            <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Registrar veículo
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

export default App;
