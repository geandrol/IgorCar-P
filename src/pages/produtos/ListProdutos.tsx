import { useEffect, useState } from "react"
import Produto from "../../models/Produto";
import ProdutoService from "../../service/ProdutoService";
import ModalProduto from "../../componentes/modal/ModalProduto";


export default function ListProdutos() {

    //inject service
    const service = new ProdutoService();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function getAll() {
        const response = await service.getAll()
        console.log(response)

        setProdutos(response)
    }

    useEffect(() => {
        getAll()
    }, [])

    return (

        <>

            <div className="container mx-auto flex flex-col items-center">
                <ModalProduto />

                
            </div>

                



            <div className="flex justify-center">
            <div className=''>
                {
                    produtos.map((item) =>
                        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 ">
                            <li className="pb-3 sm:pb-1 sm:pt-1 sm:pe-1 border-2">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0">

                                    </div>
                                    <div className="flex-1 min-w-0">
                                    <div className="font-bold text-xl ">{item.nome}</div>
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
