
import { useEffect, useState } from "react"
import CategoriaService from "../../service/CategoriaService";
import Categoria from "../../models/Categoria";
import ModalCategoria from "../../componentes/modal/ModalCategoria";


export default function ListCategorias() {

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

    return (

        <>

            <div className="container mx-auto flex flex-col items-center">
                <ModalCategoria />
                {/* <div className="mx-auto flex flex-row space-x-10 justify-center px-4 py-8">
                    {
                        categorias.map((item) =>
                            <div className="max-w-sm min-w-[250px] rounded overflow-hidden shadow-lg h-36">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item.descricao}</div>
                                </div>
                                <div className="flex justify-around items-center">
                                    <button className="bg-indigo-300 hover:bg-indigo-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/restart--v1.png" alt="restart--v1" />
                                    </button>
                                    <button className="bg-red-400 hover:bg-red-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <img width="30" height="30" src="https://img.icons8.com/ios/50/empty-trash.png" alt="empty-trash" />
                                    </button>
                                </div>
                            </div>
                        )}
                </div> */}
            </div>

       <div className="flex justify-center">
            <div className=''>
                {
                    categorias.map((item) =>
                        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 ">
                            <li className="pb-3 sm:pb-1 sm:pt-1 sm:pe-1 border-2">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0">

                                    </div>
                                    <div className="flex-1 min-w-0">
                                    <div className="font-bold text-xl ">{item.descricao}</div>
                                    </div>
                                    <div className="flex justify-around items-center sm:ps-12">
                                        <button className="bg-indigo-300 hover:bg-indigo-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                            <img width="20" height="30" src="https://img.icons8.com/ios-filled/50/restart--v1.png" alt="restart--v1" />
                                        </button>
                                        <button className="bg-red-400 hover:bg-red-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                            <img width="20" height="30" src="https://img.icons8.com/ios/50/empty-trash.png" alt="empty-trash" />
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