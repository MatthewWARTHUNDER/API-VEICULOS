import { Link } from "react-router-dom"

export function Deletar(){
    return(
        <>
        <nav className="w-full  bg-sky-700 flex items-center justify-around">
            <Link to={'/'} className="text-white">Cadastrar</Link>
            <Link to={'/Visualizar'} className="text-white">Visualizar</Link>
            <Link to={'/Deletar'} className="text-white">Excluir</Link>
            <Link to={'/Atualizar'} className="text-white">Atualizar</Link>
        </nav>

        </>
    )
}
