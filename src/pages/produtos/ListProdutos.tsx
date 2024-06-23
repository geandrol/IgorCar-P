import { useEffect, useState, useCallback, useMemo } from "react";
import Produto from "../../models/Produto";
import ProdutoService from "../../service/ProdutoService";
import CategoriaService from "../../service/CategoriaService";
import './ListProdutos.css';
import ModalProduto from "../../componentes/modal/ModalProduto";
import ModalDeleteP from "../../componentes/modal/modelDelete/ModelDeleteP";
import ModalProdutoE from "../../componentes/modal/modelEdite/ModalEditarP";
import { useNavigate } from "react-router-dom";

export default function ListProdutos() {
    const navigate = useNavigate();
    const [buscarPorNome, setBuscarPorNome] = useState("");
    const [buscarPorCategoria, setBuscarPorCategoria] = useState("");
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categorias, setCategorias] = useState([]);

    const service = useMemo(() => new ProdutoService(), []);
    const serviceC = useMemo(() => new CategoriaService(), []);

    const getAll = useCallback(async () => {
        try {
            const response = await service.getAll();
            setProdutos(response);
        } catch (error) {
            console.error("Falha ao buscar produtos", error);
        }
    }, [service]);

    const getAllCategories = useCallback(async () => {
        try {
            const response = await serviceC.getAll();
            setCategorias(response);
        } catch (error) {
            console.error("Falha ao buscar categorias", error);
        }
    }, [serviceC]);

    const handleCategoriaChange = useCallback((e) => {
        setBuscarPorCategoria(e.target.value);
    }, []);

    useEffect(() => {
        getAll();
        getAllCategories();
    }, [getAll, getAllCategories]);

    const filteredProdutos = useMemo(() => produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(buscarPorNome.toLowerCase()) &&
        produto.categoria?.descricao.includes(buscarPorCategoria)
    ), [produtos, buscarPorNome, buscarPorCategoria]);

    return (
        <>
            <div>
                <button
                    className="bg-red-900 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%]"
                    onClick={() => navigate('/estoque')}
                >
                    <span>Voltar</span>
                </button>                
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <ModalProduto />
            </div>

            <div className="flex">
                <div className="flex justify-center m-5">
                    <h1 className="pe-2 text-white">Buscar por nome:</h1>
                    <input
                        className="border-2 border-sky-500"
                        type="text"
                        placeholder="Buscar por nome..."
                        value={buscarPorNome}
                        onChange={(e) => setBuscarPorNome(e.target.value)}
                    />
                </div>

                <div className="flex justify-center m-5">
                    <h1 className="pe-2 text-white">Buscar por categoria:</h1>
                    <select
                        name="categoria"
                        value={buscarPorCategoria}
                        onChange={handleCategoriaChange}
                    >
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
                <div><h1>Nome</h1></div>
                <div><h1>Marca</h1></div>
                <div><h1>Modelo</h1></div>
                <div><h1>Quantidade</h1></div>
                <div><h1>Valor Custo</h1></div>
                <div><h1>Valor Venda</h1></div>
                <div><h1>Categoria</h1></div>
                <div><h1></h1></div>
            </div>

            {filteredProdutos.map((item) => (
                <div key={item.id} className="flex justify-between border-2 border-sky-500 grid grid-cols-8 gap-1 ms-5 me-5">
                    <div className="font-bold text-xl">{item.nome}</div>
                    <div className="font-bold text-xl">{item.marca}</div>
                    <div className="font-bold text-xl">{item.modelo}</div>
                    <div className="font-bold text-xl">{item.quantidade}</div>
                    <div className="font-bold text-xl">{item.valorCusto}</div>
                    <div className="font-bold text-xl">{item.valorVendal}</div>
                    <div className="font-bold text-xl">{item.categoria?.descricao}</div>
                    <div className="flex justify-center">
                        <ModalProdutoE productId={item.id} />
                        <ModalDeleteP productId={item.id} />
                    </div>
                </div>
            ))}
        </>
    );
}