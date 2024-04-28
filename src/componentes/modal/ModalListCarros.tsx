import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import Carro from '../../models/Carro';
import FormCarro from '../form/FormCarro';
import { FormEvent, useState } from 'react';

function ModalListCarros({carros, usuario}: any) {

    const [carroSelected, setCarroSelected] = useState<Carro>();
    const [carrosAtualizados, setCarrosAtualizados] = useState<Carro[]>(carros);


    function addCarro(carroNew: Carro) {
        setCarrosAtualizados([...carrosAtualizados, carroNew])
    }

    function editCarro(carroEdit: Carro) {
        setCarrosAtualizados(carrosAtualizados.map((carro: Carro) => {
            if (carro.id === carroEdit.id) {
                return carroEdit
            } else {
                return carro
            }
        }))
    }

    function selectCar(carro: Carro) {
        setCarroSelected(carro)
    }

    return (
        <>
            <Popup
                trigger={
                    <button className="bg-red-400 hover:bg-red-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img width="30" height="30" src="https://img.icons8.com/ios/50/suv-2.png" alt="suv-2"/>
                    </button>
                }
                modal
                onClose={() => console.log('close')}
            >
                <div className="p-5">
                    <ul role="list" className="divide-y divide-gray-100">
                        {carrosAtualizados.map((carro: Carro) => (
                                <li key={carro.id} className="flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                    <img width="30" height="30" src="https://img.icons8.com/ios/50/suv-2.png" alt="suv-2"/>
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">{carro.modelo}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{carro.placa}</p>
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <button 
                                            onClick={() => selectCar(carro)}
                                            className="bg-indigo-300 hover:bg-indigo-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/restart--v1.png" alt="restart--v1"/>
                                        </button>
                                    </div>
                                </li>
                        ))}
                    </ul>
                    <FormCarro 
                        data={carroSelected} 
                        usuario={usuario} 
                        add={addCarro}
                        edit={editCarro} 
                    />
                </div>
            </Popup>
        </>
    );
}

export default ModalListCarros;