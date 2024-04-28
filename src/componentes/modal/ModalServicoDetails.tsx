import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Servico from '../../models/Servico';
import { useEffect, useState } from 'react';

function ModalServicoDetails({ servico }: any) {

    const [servicoDetail, setServicoDetail] = useState<Servico>(servico)

    useEffect(() => {
        setServicoDetail(servico)
    })

    return (
        <>
            <Popup
                trigger={
                    <button className="bg-green-400 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img width="15" height="15" src="https://img.icons8.com/ios/50/document--v1.png" alt="document--v1" />
                    </button>
                }
                modal={false}
                closeOnDocumentClick = {false}
            >
                <div>
                    <div className="flex flex-col justify-between gap-x-5 py-2">
                       <p className='text-md'>{servicoDetail.carro.modelo}</p>
                       <p className='text-sm'>{servicoDetail.carro.placa}</p>
                    </div>
                    <div className="flex justify-between gap-x-5 py-1">
                        <p>Data</p>
                        <p>{new Date(servicoDetail.data).toLocaleDateString()}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-1">
                        <p>Garantia</p>
                        <p className='text-sm'>{new Date(servicoDetail.fimGarantia).toLocaleDateString()}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-1">
                        <p>Vlr Produtos</p>
                        <p className='text-sm'>R$ {servicoDetail.vlrTotalProdutos.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-1">
                        <p>Mao de Obra</p>
                        <p className='text-sm'>R$ {servicoDetail.vlrTotalMaoDeObra.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-1">
                        <p>Vlr Total</p>
                        <p className='text-sm'>R$ {servicoDetail.vlrTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-1">
                        <p className='text-sm'>{servicoDetail.descricao}</p>
                    </div>
                   
                </div>
            </Popup>
        </>
    );
}

export default ModalServicoDetails;