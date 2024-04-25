import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormCarro from '../form/FormCarro';



function ModalCarro() {

    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Novo Carro
                    </button>
                }
                modal
                closeOnDocumentClick = {false}
                
            >
                <></>
            </Popup>
        </>
    );
}

export default ModalCarro;