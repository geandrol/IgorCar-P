
import { useEffect, useState } from "react"
import CategoriaService from "../../service/CategoriaService";
import Categoria from "../../models/Categoria";
import ModalCategoria from "../../componentes/modal/ModalCategoria";
import ModalDeleteC from "../../componentes/modal/modelDelete/ModelDeleteC";
import ModalEditarC from "../../componentes/modal/modelEdite/ModalEditarC";
import { useNavigate } from "react-router-dom";


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
        const response = await service.getAlll()
        console.log(response)

        setCategorias(response)
    }

    useEffect(() => {
        getAll()
    }, [])

    const filteredCategorias = categorias.filter((categoria) =>
        categoria.descricao.toLowerCase().includes(buscarPorCategoria.toLowerCase())
    );

    return (

        <>
        <div>
            <button className="bg-red-500 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%] " onClick={voltar}>
            <span>Voltar</span>
                </button>                
            </div>

            <div className="container mx-auto flex flex-col items-center">
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
                <h1>Descrição</h1>
                    {
                        filteredCategorias.map((item) =>
                            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 ">
                                <li className="pb-3 sm:pb-1 sm:pt-1 sm:pe-1 border-2">
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="flex-shrink-0">
                                          
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-xl ">{item.descricao}</div>
                                        </div>
                                        <div className="flex justify-around items-center sm:ps-12">
                                            <button >
                                                <ModalEditarC  categoriaId={item.id}/>
                                            </button>
                                            <button >
                                            <ModalDeleteC  categoriaId={item.id}/>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        )}
                </div>
            </div>
        </>



    )
}