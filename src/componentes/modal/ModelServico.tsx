import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Servico from '../form/FormServico';


function ModalServico({ usuario }: any) {
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
                <Servico usuario={usuario} />
            </Popup>
        </>
    );
}

export default ModalServico;