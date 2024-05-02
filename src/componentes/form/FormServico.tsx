import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Carro from "../../models/Carro";
import Servico from "../../models/Servico";
import Produto from "../../models/Produto";
import ProdutoService from "../../service/ProdutoService";
import ServicoDto from "../../models/ServicoDto";
import ProdutoServicoDto from "../../models/ProdutoServicoDto";

function FormServico({ carros, idCliente }: any) {

    const [servico, setServico] = useState<Servico>({} as Servico);
    const [carroList, setCarroList] = useState<Carro[]>([]);


    const [carro, setCarro] = useState<Carro>({} as Carro);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [produto, setProduto] = useState<Produto>({} as Produto);

    const [produtoSelect, setProdutoSelect] = useState<Produto[]>([]);
    const [servicoDto, setServicoDto] = useState<ServicoDto>({} as ServicoDto);

    const produtoService = new ProdutoService();

    function getProdutoId(id: number) {
        const p = produtos.find(p => p.id === id)

        setProdutoSelect([...produtoSelect, p as Produto]);
    }

    async function handleNovoServico(e: FormEvent) {
        e.preventDefault();
    }

    useEffect(() => {
        async function getAllProdutos() {
            const response = await produtoService.getAll();
            setProdutos(response);
        }

        setCarroList(carros);
        getAllProdutos();
    }, []);


    function handleAddProduto() {
        if (!produto)
            alert('Selecione um produto')

        const p = produtos.find(p => p.id === Number(produto))

        setProdutoSelect([...produtoSelect, p as Produto]);

    }

    function handleDeleteProduto(id: number) {
        setProdutoSelect(produtoSelect.filter(p => p.id !== id))
    }

    return (
        <details title="Novo Serviço" className="flex flex-col justify-center items-center w-full">
            <summary className="text-4xl text-center my-8">Novo Serviço</summary>

            <form onSubmit={handleNovoServico} className="flex flex-row justify-center flex-wrap w-full p-2 gap-4">
                <div className="flex flex-col w-6/12 gap-2">
                    <p>Carro</p>
                    <select
                        name="carro"
                        required
                        id="carro"
                        className='border p-2 border-slate-800 rounded'
                        onChange={(e) => {
                            setCarro({ ...carro, id: Number(e.currentTarget.value) })
                            setServicoDto({ ...servicoDto, carroId: Number(e.currentTarget.value) })
                            console.log(servicoDto)
                        }}
                        value={carro.id}
                    >
                        <option value="">Selecione um carro</option>
                        {carros.map((carro: Carro) => (
                            <option key={carro.id} value={carro.id}>{carro.modelo}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-[38%] gap-2">
                    <p>Produtos</p>
                    <select
                        name="produto"
                        id="produto"
                        className='border p-2 border-slate-800 rounded'
                        onChange={(e) => {
                            (e.currentTarget.value as any)
                            setProduto(e.currentTarget.value as any)
                        }}
                        value={produto.id}
                    >
                        <option value="">Selecione um porduto</option>
                        {produtos.map((produto: Produto) => (
                            <option key={produto.id} value={produto.id}>{produto.nome} - {produto.modelo}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col justify-end items-end gap-2">
                    <button
                        onClick={handleAddProduto}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded h-10">+</button>
                </div>
                <div className="flex flex-col w-6/12 gap-2">
                    <label htmlFor="marca">Fim da Garantia</label>
                    <input
                        type="date"
                        placeholder="Garantia"
                        name="fimGarantia"
                        value={servico.fimGarantia}
                        onChange={(e) => {
                            setServicoDto({
                                ...servicoDto,
                                carroId: Number(carro.id),
                                fimGarantia: new Date(e.currentTarget.value)

                            })
                        }}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col w-[47%] gap-2">
                    <label htmlFor="marca">Valor de custo do produto</label>
                    <input
                        type="text"
                        placeholder="Valor mao de obra"
                        name="vlrTotalMaoDeObra"
                        value={servico.vlrTotalMaoDeObra}
                        onChange={(e) => {
                            setServicoDto({ ...servicoDto, carroId: Number(carro.id), vlrTotalMaoDeObra: Number(e.currentTarget.value) })
                        }}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-row justify-start flex-wrap items-center gap-x-5 sm:px-0">
                    {
                        produtoSelect.map((p: Produto) => (
                            <button key={p.id}
                                onClick={() => handleDeleteProduto(p.id)}
                            >
                                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{p.nome}</span>
                            </button>
                        ))
                    }
                </div>

                <div className="flex flex-col gap-2 w-[99%]">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        placeholder="Descrição"
                        name="descricao"
                        value={servicoDto.descricao}
                        onChange={(e) => {
                            setServicoDto({ ...servicoDto, carroId: Number(carro.id), clienteId: Number(idCliente), descricao: e.currentTarget.value })
                            console.log(servicoDto)
                        }}
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



        </details>
    );
}

export default FormServico;