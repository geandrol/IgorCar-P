import { useEffect, useState } from "react"
import Produto from "../../models/Produto";
import ProdutoService from "../../service/ProdutoService";
import CategoriaService from "../../service/CategoriaService";
import './ListProdutos.css'
import ModalProduto from "../../componentes/modal/ModalProduto";
import ModalDeleteP from "../../componentes/modal/modelDelete/ModelDeleteP";
import ModalProdutoE from "../../componentes/modal/modelEdite/ModalEditarP";
import { Link, Navigate, useNavigate } from "react-router-dom";


export default function ListProdutos() {
    let navigate = useNavigate()
    const [buscarPorNome, setBuscarPorNome] = useState("");
    const [buscarPorCategoria, setBuscarPorCategoria] = useState("");

    function voltar() {
        navigate('/estoque')
    }

    //inject service
    const service = new ProdutoService();
    const serviceC = new CategoriaService();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const [categorias, setCategorias] = useState([]);

    async function getAll() {

        const response = await service.getAll();
        console.log(response);
        setProdutos(response);
    }

    async function getAlll() {
        const response = await serviceC.getAlll();
        console.log(response);
        setCategorias(response);

    }

    const handleCategoriaChange = (e) => {
        setBuscarPorCategoria(e.target.value);
    };

    useEffect(() => {
        getAll();
        getAlll();
    }, []);

    const filteredProdutos = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(buscarPorNome.toLowerCase()) &&
        produto.categoria?.descricao.includes(buscarPorCategoria)
    );

    return (

        <>
            <div>
            <button className="bg-red-500 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%] " onClick={voltar}>
            <span>Voltar</span>
                </button>                
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <ModalProduto />
            </div>

            <div className="flex">

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

                <div className="flex justify-center m-5">
                    <h1 className="pe-2">Buscar por categoria:</h1>
                    <select
                        name="categoria"
                        value={buscarPorCategoria}
                        onChange={handleCategoriaChange}>
                        <option value="">Todas as categorias</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.descricao}>
                                {categoria.descricao}
                            </option>
                        ))}
                    </select>
                </div>


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
                                <button >
                                    <ModalProdutoE productId={item.id}/>
                                </button>
                                <button >
                                    <ModalDeleteP productId={item.id} />
                                </button>
                            </div>

                        </div>

                    </div>
                )}
        </>



    )
}
