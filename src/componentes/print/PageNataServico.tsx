import { useEffect, useState } from "react";
import Cliente from "../../models/Cliente";
import Servico from "../../models/Servico";

export default function PageNataServico({cliente, servico}: any) {

    const [clienteNota, setClienteNota] = useState<Cliente>();
    const [servicoNota, setServicoNota] = useState<Servico>();

    useEffect(() => {
       setClienteNota(cliente)
       setServicoNota(servico)
   })

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center w-full border-b border-gray-200">
                <div className="flex flex-row justify-between items-center gap-x-5 mt-2">
                    <img width="100" height="100" src="https://img.icons8.com/color/48/herbie.png" alt="herbie" />
                    <p className='text-5xl ml-16'>Igor Car</p>
                </div>

                <div className="flex flex-row justify-center items-center gap-x-5 px-1 sm:px-0 w-full">
                    <p className="text-base font-semibold leading-7 text-gray-900">Endereço: </p>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Av Francisco de Góes Araújo N° 469</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-5">
                    <div className="flex flex-row justify-start items-center gap-x-5 sm:px-0">
                        <p className="text-base font-semibold leading-7 text-gray-900">Bairo: </p>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Jardim Lourdes</p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-x-5 sm:px-0">
                        <p className="text-base font-semibold leading-7 text-gray-900">Cep: </p>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">08452-490</p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-x-5 sm:px-0">
                        <p className="text-base font-semibold leading-7 text-gray-900">Cidade: </p>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Sao Paulo - Sp</p>
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-5">
                    <div className="flex flex-row justify-start items-center gap-x-5 sm:px-0">
                        <p className="text-base font-semibold leading-7 text-gray-900">Telefone: </p>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">(11) 97801-0384</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[90%] mt-5 border-b border-gray-200">
                <div className="flex flex-row justify-center items-center gap-x-5 px-1 sm:px-0 w-full">
                    <p className="text-base font-semibold leading-7 text-gray-900">Clente: </p>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{clienteNota?.nome}</p>
                    <p className="text-base font-semibold leading-7 text-gray-900">Telefone: </p>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{clienteNota?.contato}</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-5">
                    <div className="flex flex-row justify-start items-center gap-x-5 sm:px-0">
                        <p className="text-base font-semibold leading-7 text-gray-900">Carro: </p>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{servicoNota?.carro.modelo}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-x-5 sm:px-0">
                        <p className="text-base font-semibold leading-7 text-gray-900">Placa</p>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{servicoNota?.carro.placa}</p>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full border-b border-gray-200">
                <ul role="list" className="divide-y divide-gray-100 w-[90%]">
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Produto</p>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Valor</p>
                        </div>
                    </li>
                   {servicoNota?.produtos.map((item) => (
                       <li className="flex justify-between gap-x-6 py-3">
                       <div className="min-w-0 flex-auto">
                           <p className="text-xs font-semibold leading-4 text-gray-700">{item.produto?.descricao}</p>
                       </div>
                       <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                           <p className="text-xs font-semibold leading-4 text-gray-700">R$ {item.produto?.valorVendal.toFixed(2)}</p>
                       </div>
                   </li>
                   ))}
                    
                </ul>

                <div className="flex flex-col justify-between items-center gap-x-5 m-10">
                    <p className="text-base font-semibold leading-7 text-gray-900">Descricao do Serviço: </p>
                    <p className="text-xs font-semibold leading-4 text-gray-700">{servicoNota?.descricao}</p>
                </div>

                <ul role="list" className="divide-y divide-gray-100 w-[90%]">
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Data Serviço</p>
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Fim Garantia</p>
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Vlr Servico</p>
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Vlr Produtos</p>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Vlr Total</p>
                        </div>
                    </li>

                    <li className="flex justify-between gap-x-2 py-3">
                        <div className="min-w-0 flex-auto">
                            <p className="text-xs font-semibold leading-6 text-gray-700">{new Date(servico.data).toLocaleDateString()}</p>
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-xs font-semibold leading-6 text-gray-700">{new Date(servico.fimGarantia).toLocaleDateString()}</p>
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-xs font-semibold leading-6 text-gray-700">R$ {servicoNota?.vlrTotalMaoDeObra.toFixed(2)}</p>
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-xs font-semibold leading-6 text-gray-700">R$ {servicoNota?.vlrTotalProdutos.toFixed(2)}</p>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-xs font-semibold leading-6 text-gray-700">R$ {servicoNota?.vlrTotal.toFixed(2)}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}