import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Cliente from '../form/FormCliente';


function ModalCliente({reflash, data}: any) {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-blue-500 hover:bg-blue-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%]">
                    <img className ="mr-2" width="50" height="50" src="https://img.icons8.com/ios/50/plus-2-math.png" alt="plus-2-math"/>
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