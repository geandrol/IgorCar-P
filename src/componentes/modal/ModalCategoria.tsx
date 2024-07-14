import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Categoria from '../form/FormCategoria';
import { FaPlus } from 'react-icons/fa';


function ModalCategoria() {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-blue-500 hover:bg-blue-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded-br-3xl font-bold w-[100%]">
                   <FaPlus className="mr-2" size={50} />
                            <span>Cadastrar Novo</span>
                    </button>
                }
                modal
            >
                <Categoria />
            </Popup>
        </>
    );
}

export default ModalCategoria;