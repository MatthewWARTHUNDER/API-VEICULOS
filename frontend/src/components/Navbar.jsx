import { Link } from "react-router-dom"
//Link para as páginas do site
export default function Navbar(){
    return(
        <>
        <nav className="w-full bg-sky-700 flex items-center justify-around py-4">
            <Link to={'/'} className="text-white font-semibold">Cadastrar</Link>
            <Link to={'/Visualizar'} className="text-white font-semibold">Visualizar</Link>
            <Link to={'/Excluir'} className="text-white font-semibold">Excluir</Link>
            <Link to={'/Atualizar'} className="text-white font-semibold">Atualizar</Link>
        </nav>

        </>
    )
}
