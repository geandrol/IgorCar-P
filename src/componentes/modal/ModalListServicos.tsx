import Popup from 'reactjs-popup';
import { FaFileAlt, FaTrash } from 'react-icons/fa'; // Importando ícone do react-icons

import 'reactjs-popup/dist/index.css';
import Servico from '../../models/Servico';
import { useEffect } from 'react';
import ModalServicoDetails from './ModalServicoDetails';
import PrintNotaServico from '../print/PrintNotaServico';
import FormServico from '../form/FormServico';
import ServicoService from '../../service/ServicoService';




function ModalListServicos({ cliente }: any) {

    const service = new ServicoService();

    useEffect(() => {
        console.log(cliente.servicos)
    }, [])

    async function deletarServico(id?:number, descricao?: string) {
       
        if(confirm(`Deseja deletar o servico ${id} - ${descricao} `)) {
            try {
                await service.delete(id ?? 0);
                alert('Servico apagado com sucesso');
                window.location.reload();
            } catch (error) {
                alert('Erro ao apagar o produto');
            }
        }
    }

    return (
        <>
            <Popup
                trigger={
                    <button className="bg-green-400 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <FaFileAlt size={30} /> {/* Substituindo o ícone externo */}
                    </button>
                }
                modal
            >
                <div className="">
                    <ul role="list" className="divide-y divide-gray-100 px-2 max-h-28 overflow-y-auto">
                        {cliente.servicos.map((servico: Servico) => (
                            <li key={servico.id} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="flex justify-center items-center min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto text-center">
                                            <p className="max-w-[20rem] text-sm font-semibold leading-6 text-gray-900">
                                                {new Date(servico.data).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto text-center">
                                            <ModalServicoDetails servico={servico} />
                                        </div>
                                        <div className="min-w-0 flex-auto text-center">
                                            <PrintNotaServico cliente={cliente} servico={servico} />
                                        </div>
                                        <div className="min-w-0 flex-auto text-center">
                                            <button onClick={() => deletarServico(servico.id, servico.descricao)} className="bg-red-400 hover:bg-red-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{servico.carro.modelo}</p>
                                        <p className="-mt-1 truncate text-xs leading-5 text-gray-500">{servico.carro.placa}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center min-w-0">
                                    <div className="min-w-0 flex-auto text-center">
                                        <p className="max-w-[10rem] text-xs font-semibold leading-6 text-gray-900"> {servico.vlrTotalProdutos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center min-w-0">
                                    <div className="min-w-0 flex-auto">
                                        <p className="max-w-[10rem] text-xs font-semibold leading-6 text-gray-900"> {servico.vlrTotalMaoDeObra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center min-w-0">
                                    <div className="min-w-0 flex-auto text-center">
                                        <p className="max-w-[10rem] text-base font-semibold leading-6 text-gray-900"> {servico.vlrTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <FormServico idCliente={cliente.id} carros={cliente.carros} />

                </div>
            </Popup>
        </>
    );
}

export default ModalListServicos;