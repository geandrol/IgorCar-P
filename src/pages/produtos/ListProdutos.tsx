import { useEffect, useState } from "react"
import Produto from "../../models/Produto";
import ProdutoService from "../../service/ProdutoService";
import CategoriaService from "../../service/CategoriaService";
import './ListProdutos.css'
import ModalProduto from "../../componentes/modal/ModalProduto";
import ModalDeleteP from "../../componentes/modal/modelDelete/ModelDeleteP";
import ModalProdutoE from "../../componentes/modal/modelEdite/ModalEditarP";
import { useNavigate } from "react-router-dom";
import Categoria from "../../models/Categoria";


export default function ListProdutos() {
    let navigate = useNavigate()
    const [buscarPorNome, setBuscarPorNome] = useState("");
    const [buscarPorCategoria, setBuscarPorCategoria] = useState("");



    function voltar() {
        navigate('/estoque')
    }

    //inject service
    const service = new ProdutoService();
    const serviceCategoria = new CategoriaService();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const [produtosInactive, setProdutosInactive] = useState<Produto[]>([]);

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function getAllProduto() {

        const response = await service.getAll();
        console.log(response);
        setProdutos(response);
    }

    async function getAllProdutoInactive() {

        const response = await service.getAllInactive();
        console.log(response);
        setProdutosInactive(response);
    }

    async function getAllCategorias() {
        const response = await serviceCategoria.getAll();
        console.log(response);
        setCategorias(response);

    }

    const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBuscarPorCategoria(e.target.value);
    };

    useEffect(() => {
        getAllProduto();
        getAllCategorias();
        getAllProdutoInactive()
    }, []);

    const filteredProdutos = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(buscarPorNome.toLowerCase()) &&
        produto.categoria?.descricao.includes(buscarPorCategoria)
    );

    const filteredProdutosInactive = produtosInactive.filter((produto) =>
        produto.nome.toLowerCase().includes(buscarPorNome.toLowerCase()) &&
        produto.categoria?.descricao.includes(buscarPorCategoria)
    );

    return (

        <div className="flex flex-col justify-center">
            <div className="flex flex-row">
                <button className="bg-red-500 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded-bl-3xl font-bold w-3/12 " onClick={voltar}>
                    <span>Voltar</span>
                </button> 
                <ModalProduto />               
            </div>
        
            <div className="flex justify-center w-[100%] mx-auto">
                <div className="flex justify-center m-5">
                    <h1 className="pe-2 text-xl">Buscar por nome:</h1>
                    <input
                        className="border-2 border-sky-500"
                        type="text"
                        placeholder="Buscar por nome..."
                        value={buscarPorNome}
                        onChange={(e) => setBuscarPorNome(e.target.value)}
                    />
                </div>

                <div className="flex justify-center m-5">
                    <h1 className="pe-2 text-xl">Buscar por categoria:</h1>
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


            <div className="mx-7">
                <h1 className="text-xl">Produtos Ativo</h1>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 text-xl">Nome</th>
                            <th className="py-2 text-xl">Marca</th>
                            <th className="py-2 text-xl">Modelo</th>
                            <th className="py-2 text-xl">Descrição</th>
                            <th className="py-2 text-xl">Quantidade</th>
                            <th className="py-2 text-xl">Valor Custo</th>
                            <th className="py-2 text-xl">Valor Venda</th>
                            <th className="py-2 text-xl">Categoria</th>
                            <th className="py-2 text-xl">Qtd Min</th>
                            <th className="py-2 text-xl">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="border">

                        {
                        filteredProdutos.map((item) =>
                            <tr className="border" key={item.id}>
                                <td className="text-center text-xl">{item.nome}</td>
                                <td className="text-center text-xl">{item.marca}</td>
                                <td className="text-center text-xl">{item.modelo}</td>
                                <td className="text-center text-xl">{item.descricao}</td>
                                <td className={`text-center text-xl ${item.categoria && item.quantidade <= item.categoria.qtdMin ? 'bg-red-500' : ''}`}>
                                    {item.quantidade}
                                </td>
                                <td className="text-center text-xl">{item.valorCusto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td className="text-center text-xl">{item.valorVendal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td className="text-center text-xl">{item.categoria?.descricao}</td>
                                <td className="text-center text-xl">{item.categoria?.qtdMin}</td>
                                <td className=" px-4 py-2 flex justify-around space-x-2 ">
                                    <ModalProdutoE productId={item.id} />
                                    <ModalDeleteP productId={item.id} isDelete={true} />
                                </td>
                            </tr>
                            
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mx-7 mt-10">
                <h1 className="text-xl">Produtos Inativo</h1>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 text-xl">Nome</th>
                            <th className="py-2 text-xl">Marca</th>
                            <th className="py-2 text-xl">Modelo</th>
                            <th className="py-2 text-xl">Descrição</th>
                            <th className="py-2 text-xl">Quantidade</th>
                            <th className="py-2 text-xl">Valor Custo</th>
                            <th className="py-2 text-xl">Valor Venda</th>
                            <th className="py-2 text-xl">Categoria</th>
                            <th className="py-2 text-xl">Qtd Min</th>
                            <th className="py-2 text-xl">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="border">

                        {
                        filteredProdutosInactive.map((item) =>
                            <tr className="border" key={item.id}>
                                <td className="text-center text-xl">{item.nome}</td>
                                <td className="text-center text-xl">{item.marca}</td>
                                <td className="text-center text-xl">{item.modelo}</td>
                                <td className="text-center text-xl">{item.descricao}</td>
                                <td className={`text-center text-xl ${item.categoria && item.quantidade <= item.categoria.qtdMin ? 'bg-red-500' : ''}`}>
                                    {item.quantidade}
                                </td>
                                <td className="text-center text-xl">{item.valorCusto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td className="text-center text-xl">{item.valorVendal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td className="text-center text-xl">{item.categoria?.descricao}</td>
                                <td className="text-center text-xl">{item.categoria?.qtdMin}</td>
                                <td className=" px-4 py-2 flex justify-around space-x-2 ">
                                    <ModalProdutoE productId={item.id} />
                                    <ModalDeleteP productId={item.id} isDelete={false}/>
                                </td>
                            </tr>
                            
                        )}
                    </tbody>
                </table>
            </div>
        </div>



    )
}
