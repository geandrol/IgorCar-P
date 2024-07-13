import Popup from 'reactjs-popup';
import { FaRedo } from 'react-icons/fa'; // Importando ícone do react-icons

import 'reactjs-popup/dist/index.css';
import Cliente from '../form/FormCliente';


function ModalClienteEdit({ reflash, data}: any) {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-indigo-300 hover:bg-indigo-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <FaRedo size={30} /> {/* Substituindo o ícone externo pelo ícone do react-icons */}
                    </button>
                }
                modal
            >
                <Cliente reflash={reflash} data={data} />
            </Popup>
        </>
    );
}

export default ModalClienteEdit;