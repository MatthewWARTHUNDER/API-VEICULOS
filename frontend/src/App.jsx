import { useEffect, useState, useTransition } from 'react'
import axios  from 'axios'
import Navbar from './components/Navbar'

function App() {

  /*Funções UseState*/
  const [id, setId] = useState(0)
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ano, setAno] = useState(0)
  const [proprietario, setProprietario] = useState("")
  const [cor, setCor] = useState("") 


  /* Função anônima */
  useEffect(() => {
    console.log(marca, modelo, ano, cor, proprietario)
  }, [marca, modelo, ano, cor , proprietario])


  // npm i axios, registrar veículo
  async function RegisterNewVehicle(){
    await axios.post("http://localhost:3000/cadastrar",{
      marca, modelo, ano, cor, proprietario

    })
  }

    function handleSubmit(e){
      e.preventDefault();
      RegisterNewVehicle();
    } //no botão de registrar do form, usar essa função
    //onclick="() => {handleSubmit}" 

  async function handleSubmit(e) {
    e.preventDefault(); 
  }

// Função para atualizar por ID
  async function updateVehicle(){
    await axios.put(`http://localhost:3000/update/${id}`,{
      marca, modelo, ano, cor, proprietario
    })
  }

  function handleUpdate(e){
    e.preventDefault();
    updateVehicle();
  }

  //Deletar por ID
  async function deleteVehicle(){
    await axios.delete(`http://localhost:3000/deletar/${id}`,{
      marca, modelo, ano, cor, proprietario
    })
  }


  function handleDelete(e){
    e.preventDefault();
    deleteVehicle();
  }


  async function SelecionarVeiculo(){
    await axios.get(`http://localhost:3000/selecionarallporid/${id}`,{
    marca, modelo, ano, cor, proprietario

    })
  }

  function handleSelect(e){
    e.preventDefault();
    SelecionarVeiculo();
  }










  return (
    <>
    <Navbar/>
      <div className="card">
        <form >

          <label htmlFor="proprietario">Proprietario</label>
          <br />
          <input type="text" id='proprietario'  onChange={(e) => {setProprietario(e.target.value)}} />
          <br />
          <label htmlFor="marca">Marca</label>
          <br />
          <input type="text" id='marca' onChange={(e) => {setMarca(e.target.value)}}/>
          <br />
          <label htmlFor="modelo">Modelo</label>
          <br />
          <input type="text" id='modelo'   onChange={(e) => {setModelo(e.target.value)}}/>
          <br />
          <label htmlFor="cor">Cor</label>
          <br />
          <input type="text" id='cor'  onChange={(e) => {setCor(e.target.value)}}/>
          <br />
          <label htmlFor="ano">Ano</label>
          <br />
          <input type="number" id='ano'  onChange={(e) => {Number(setAno(e.target.value))}}/>
          <br />
          <br />
          <button type='submit' onClick={handleSubmit}>Registrar veículo</button>
          <br />
          <br />
          <button type='submit' onClick={handleUpdate}>Atualizar lista</button>
          <br />
          <br />
          <input type="number" id='id' placeholder='Atualizar por id' onChange={(e) => {Number(setId(e.target.value))}} />
          <br />
          <br />
          <button type='submit' onClick={handleDelete}>Excluir lista</button>
          <br />
          <br />
          <input type="number" id='id'  placeholder='Deletar por id' onChange={(e) => {Number(setId(e.target.value))}} />
          <br />
          <br />
          <button type='submit' onClick={handleSelect}>Selecionar carro</button>
          <br />
          <br />
          <input type="number" id='id'  placeholder='Selecionar por id' onChange={(e) => {Number(setId(e.target.value))}} />
          <br />
          <br />


        </form>
      </div>
    </>
  )
}

export default App

