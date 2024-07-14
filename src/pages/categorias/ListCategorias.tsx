import { useEffect, useState } from "react"
import CategoriaService from "../../service/CategoriaService";
import Categoria from "../../models/Categoria";
import ModalCategoria from "../../componentes/modal/ModalCategoria";
import ModalDeleteC from "../../componentes/modal/modelDelete/ModelDeleteC";
import ModalEditarC from "../../componentes/modal/modelEdite/ModalEditarC";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'; // Importando ícone do react-icons

export default function ListCategorias() {
    let navigate = useNavigate()
    function voltar() {
        navigate('/estoque')
    }

    const [buscarPorCategoria, setBuscarPorCategoria] = useState("");
    //inject service
    const service = new CategoriaService();

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function getAll() {
        const response = await service.getAll()
        console.log(response)

        setCategorias(response)
    }

    useEffect(() => {
        getAll()
    }, [])

    const filteredCategorias = categorias.filter((categoria) => {
        if (!buscarPorCategoria) return true;
        return categoria.descricao.toLowerCase().includes(buscarPorCategoria.toLowerCase());
    });

    return (

        <>
            <div className="flex flex-row">
                <button className="bg-red-500 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded-bl-3xl font-bold w-3/12 " onClick={voltar}>
                    <FaArrowLeft className="mr-2" size={20} /> {/* Substituindo o ícone externo */}
                    <span>Voltar</span>
                </button>  
                <ModalCategoria />              
            </div>

            <div className="flex justify-center m-5">
                <h1 className="pe-2">Buscar por categoria: </h1>
                <input
                    className="border-2 border-sky-500"
                    type="text"
                    placeholder="Buscar por nome..."
                    value={buscarPorCategoria}
                    onChange={(e) => setBuscarPorCategoria(e.target.value)}
                />
            </div>

            <div className="flex justify-center">
                <div className=''>
                <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2">Descrição</th>
                                        <th className="py-2">Qtd Mínima</th>
                                        <th className="py-2">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="border">
                    {
                        filteredCategorias.map((item) => 
                                    <tr className="border" key={item.id}>
                                        <td className=" px-4 py-2">{item.descricao}</td>
                                        <td className=" px-4 py-2">{item.qtdMin}</td>
                                        <td className=" px-4 py-2 flex space-x-2">
                                            <ModalEditarC categoriaId={item.id} />
                                            <ModalDeleteC categoriaId={item.id} />
                                        </td>
                                    </tr>
                        )}
                         </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}