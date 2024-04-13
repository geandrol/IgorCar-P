import { useEffect, useState } from "react"
import Produto from "../../models/Produto";
import ProdutoService from "../../service/ProdutoService";
import ModalProduto from "../../componentes/modal/ModalProduto";
import './ListProdutos.css'
import { FaTrash, FaSyncAlt } from 'react-icons/fa';


export default function ListProdutos() {

    const [buscarPorNome, setBuscarPorNome] = useState("");
    
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

    const filteredProdutos = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(buscarPorNome.toLowerCase())
    );

    getAll()
    return (

        <>

            <div className="container mx-auto flex flex-col items-center">
                <ModalProduto />


            </div>

            <div className="flex justify-center m-5">
                <h1 className="pe-2">Buscar por nome:</h1>
                <input
                className="border-2 border-sky-500"
                    type="text"
                    placeholder="Buscar por nome..."
                    value={buscarPorNome}
                    onChange={(e) => setBuscarPorNome(e.target.value)}
                />
            </div>


            <div className="flex justify-between border-2 border-sky-500 grid grid-cols-8 gap-1 ms-5 me-5">
                <div>
                    <h1>Nome</h1>
                </div>
                <div>
                    <h1>Marca</h1>
                </div>
                <div>
                    <h1>Modelo</h1>
                </div>
                <div>
                    <h1>Quantidade</h1>
                </div>
                <div>
                    <h1>Valor Custo</h1>
                </div>
                <div>
                    <h1>Valor Venda</h1>
                </div>
                <div>
                    <h1>Categoria</h1>
                </div>
                <div>
                    <h1></h1>
                </div>
            </div>

            {
                filteredProdutos.map((item) =>
                    <div className="flex justify-between border-2 border-sky-500 grid grid-cols-8 gap-1 ms-5 me-5">
                        <div>
                            <div className="flex-1 min-w-0 ">
                                <div className="font-bold text-xl ">{item.nome}</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex-1 min-w-0 ">
                                <div className="font-bold text-xl ">{item.marca}</div>
                            </div>                 </div>
                        <div>
                            <div className="flex-1 min-w-0 ">
                                <div className="font-bold text-xl ">{item.modelo}</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex-1 min-w-0 ">
                                <div className="font-bold text-xl ">{item.quantidade}</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex-1 min-w-0">
                                <div className="font-bold text-xl ">{item.valorCusto}</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex-1 min-w-0">
                                <div className="font-bold text-xl ">{item.valorVendal}</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex-1 min-w-0">
                                <div className="font-bold text-xl ">{item.categoria?.descricao}</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-center">
                                <button className="font-bold text-xl bg-indigo-300 hover:bg-indigo-100 py-1 px-4 rounded inline-flex items-center">
                                    <FaSyncAlt />
                                </button>
                                <button className="bg-red-400 hover:bg-red-200 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center">
                                    <FaTrash />
                                </button>
                            </div>

                        </div>

                    </div>
                )}
        </>



    )
}
