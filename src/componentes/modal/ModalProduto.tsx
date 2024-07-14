import Popup from 'reactjs-popup';
import { FaPlus } from 'react-icons/fa';

import 'reactjs-popup/dist/index.css';
import Produto from '../form/FormProduto';

function ModalProduto() {
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
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <Produto />
                </div>
            </Popup>
        </>
    );
}

export default ModalProduto;