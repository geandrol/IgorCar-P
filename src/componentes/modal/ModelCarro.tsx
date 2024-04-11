import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Carro from '../form/Carro';


function ModalCarro() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Categoria
                    </button>
                }
                modal
            >
                <Carro />
            </Popup>
        </>
    );
}

export default ModalCarro;