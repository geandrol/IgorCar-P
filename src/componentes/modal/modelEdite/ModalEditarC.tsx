import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaSyncAlt } from 'react-icons/fa';
import FormCategoria from '../../form/FormCategoria';

function ModalEditarC({ categoriaId }: { categoriaId: number }) {
    return (
        <>
            <Popup
               trigger={
                <button className="font-bold text-xl bg-indigo-300 hover:bg-indigo-100 py-[5px] px-4 ml-10 mr-6 rounded inline-flex items-center">                  
                    <FaSyncAlt size={24} />
                </button>
            }
                modal
            >
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <FormCategoria categoriaId={categoriaId} />
                </div>
            </Popup>
        </>
    );
}

export default ModalEditarC;