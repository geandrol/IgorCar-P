import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Produto from '../form/Pruduto';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <Produto />
            </Popup>
        </>
    );
}

export default ModalProduto;