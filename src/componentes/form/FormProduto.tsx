import  { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ProdutoService from "../../service/ProdutoService";
import Produto from "../../models/Produto";
import CategoriaService from "../../service/CategoriaService";
import Categoria from "../../models/Categoria";

function FormProduto() {
    const prodService = new ProdutoService();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const catService = new CategoriaService();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [categoriaId, setCategoriaId] = useState(0);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
       let cat = {
            id: categoriaId
        }

        console.log(cat)
       
        setProduto({
            ...produto,
            [name]: value,
            categoria : cat as Categoria
        });

    }

    function getCategoriaId(id: number) {
        console.log(id)
        setCategoriaId(id)
    }

    useEffect(() => {
        async function getAllCategorias() {
            const response = await catService.getAll();
            setCategorias(response);
        }

        getAllCategorias();
    }, []);

    const handleNovoProduto = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(JSON.stringify(produto))

        try {
            if (produto.id) {
                await prodService.update(produto);
                alert('Produto atualizado com sucesso');
            } else {
                await prodService.save(produto);
                alert('Produto cadastrado com sucesso');
            }
        } catch (error: any) {
            console.error('Erro:', error.message);
            alert('Erro ao processar o produto');
        }
    };

    async function buscarCategoriaPorId(id: string) {
        try {
            const categoriaEncontrada = await catService.getById(Number(id));
            setCategoria(categoriaEncontrada);
        } catch (error) {
            console.error('Erro ao buscar categoria por ID:', error);
        }
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Produto</h1>

            <form onSubmit={handleNovoProduto} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Nome do produto</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="marca">Marca do produto</label>
                    <input
                        type="text"
                        placeholder="Marca"
                        name="marca"
                        value={produto.marca}
                        onChange={handleChange}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="marca">Modelo do produto</label>
                    <input
                        type="text"
                        placeholder="Modelo"
                        name="modelo"
                        value={produto.modelo}
                        onChange={handleChange}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="marca">Quantidade do produto</label>
                    <input
                        type="text"
                        placeholder="Quantidade"
                        name="quantidade"
                        value={produto.quantidade}
                        onChange={handleChange}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="marca">Valor de custo do produto</label>
                    <input
                        type="text"
                        placeholder="ValorCusto"
                        name="valorCusto"
                        value={produto.valorCusto}
                        onChange={handleChange}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="marca">Valor de venda do produto</label>
                    <input
                        type="text"
                        placeholder="ValvendaorCusto"
                        name="valorVendal"
                        value={produto.valorVendal}
                        onChange={handleChange}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select
                        name="categoria"
                        id="categoria"
                        className='border p-2 border-slate-800 rounded'
                        onChange={(e) => {
                            buscarCategoriaPorId(e.currentTarget.value)
                            getCategoriaId(Number(e.currentTarget.value)) 
                    
                        }}
                        value={categoria.id}
                    >
                        <option value="" disabled>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
                        ))}
                    </select>
                </div>

                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 
                        hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormProduto;