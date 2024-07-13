import Popup from 'reactjs-popup';
import { FaPlus } from 'react-icons/fa'; // Importando ícone do react-icons

import 'reactjs-popup/dist/index.css';
import Cliente from '../form/FormCliente';


function ModalCliente({reflash, data}: any) {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-blue-500 hover:bg-blue-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%]">
                    <FaPlus className="mr-2" size={50} /> {/* Substituindo o ícone externo */}
                            <span>Cadastrar Novo</span>
                    </button>
                }
                modal
            >
                <Cliente reflash={reflash} data={data} />
            </Popup>
        </>
    );
}

export default ModalCliente;