import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Produto from '../../form/FormProduto';
import { FaSyncAlt } from 'react-icons/fa';
import FormProduto from '../../form/FormProduto';

function ModalProdutoE({ productId }) {
    return (
        <>
            <Popup
               trigger={
                <button className="font-bold text-xl bg-indigo-300 hover:bg-indigo-100 py-1 px-4 rounded inline-flex items-center">                  
                    <FaSyncAlt />
                </button>
            }
                modal
            >
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <FormProduto productId = {productId}/>
                </div>
            </Popup>
        </>
    );
}

export default ModalProdutoE;