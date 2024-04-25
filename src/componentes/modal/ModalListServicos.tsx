import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

function ModalListServicos() {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-green-400 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img width="30" height="30" src="https://img.icons8.com/ios/50/document--v1.png" alt="document--v1"/>
                    </button>
                }
                modal
            >
                <div>
                    <h1>Seriços</h1>
                    <h1>Seriços</h1>
                    <h1>Seriços</h1>
                </div>
            </Popup>
        </>
    );
}

export default ModalListServicos;