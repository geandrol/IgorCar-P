import React, { ChangeEvent, useEffect, useState } from "react";
import ProdutoService from "../../service/ProdutoService";
import Produto from "../../models/Produto";

function FormProduto() {
    const service = new ProdutoService();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    };

    async function getAll() {
        const response = await service.getAll()
        console.log(response)

        setProdutos(response)
    }
    useEffect(() => {
        getAll()
    }, [])

    const handleNovoProduto = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (produto.id) {
                await service.update(produto);
                alert('Categoria atualizada com sucesso');
                getAll()
            } else {
                await service.save(produto);
                alert('Categoria cadastrada com sucesso');
                getAll()
            }
        } catch (error: any) {
            console.error('Erro:', error.message);
            alert('Erro ao processar a categoria');
        }
    };

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Categoria</h1>

            <form onSubmit={handleNovoProduto} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da categoria</label>
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
                    <label htmlFor="marca">Descrição da categoria</label>
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
                    <label htmlFor="marca">Descrição da categoria</label>
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