
import { useEffect, useState } from "react"
import CategoriaService from "../../service/CategoriaService";
import Categoria from "../../models/Categoria";
import ModalCategoria from "../../componentes/modal/ModalCategoria";
import { FaSyncAlt, FaTrash } from "react-icons/fa";


export default function ListCategorias() {
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
                                            <button className="font-bold text-xl bg-indigo-300 hover:bg-indigo-100 py-1 px-4 rounded inline-flex items-center">
                                                <FaSyncAlt />
                                            </button>
                                            <button className="bg-red-400 hover:bg-red-200 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center">
                                                <FaTrash />
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