import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Produto from '../form/FormProduto';

function ModalProduto() {
    return (
        <>
            <Popup
               trigger={
                <button className="bg-blue-500 hover:bg-blue-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%]">
                    <img className="mr-2" width="50" height="50" src="https://img.icons8.com/ios/50/plus-2-math.png" alt="plus-2-math" />
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