import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaSyncAlt } from 'react-icons/fa';
import FormCategoria from '../../form/FormCategoria';

function ModalEditarC({ categoriaId }) {
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
                <FormCategoria categoriaId = {categoriaId}/>
                </div>
            </Popup>
        </>
    );
}

export default ModalEditarC;