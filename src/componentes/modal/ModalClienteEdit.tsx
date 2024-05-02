import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Cliente from '../form/FormCliente';


function ModalClienteEdit({ reflash, data}: any) {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-indigo-300 hover:bg-indigo-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/restart--v1.png" alt="restart--v1" />
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