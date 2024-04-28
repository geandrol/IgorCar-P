import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Servico from '../../models/Servico';
import { useEffect } from 'react';
import ModalServicoDetails from './ModalServicoDetails';
import PrintNotaServico from '../print/PrintNotaServico';
import FormServico from '../form/FormServico';

function ModalListServicos({ cliente }: any) {


    useEffect(() => {
        console.log(cliente.servicos)
    }, [])
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-green-400 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img width="30" height="30" src="https://img.icons8.com/ios/50/document--v1.png" alt="document--v1" />
                    </button>
                }
                modal
            >
                <div>
                    <ul role="list" className="divide-y divide-gray-100 px-2">
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
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{servico.carro.modelo}</p>
                                        <p className="-mt-1 truncate text-xs leading-5 text-gray-500">{servico.carro.placa}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center min-w-0">
                                    <div className="min-w-0 flex-auto text-center">
                                        <p className="max-w-[10rem] text-xs font-semibold leading-6 text-gray-900"> R$ {servico.vlrTotalProdutos.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center min-w-0">
                                    <div className="min-w-0 flex-auto">
                                        <p className="max-w-[10rem] text-xs font-semibold leading-6 text-gray-900"> R$ {servico.vlrTotalMaoDeObra.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center min-w-0">
                                    <div className="min-w-0 flex-auto text-center">
                                        <p className="max-w-[10rem] text-base font-semibold leading-6 text-gray-900"> R$ {servico.vlrTotal.toFixed(2)}</p>
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