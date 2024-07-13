import Popup from 'reactjs-popup';
import { FaCar, FaSyncAlt } from 'react-icons/fa'; // Importando ícones do react-icons

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
                        <FaCar size={30} /> {/* Substituindo ícone externo */}
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
                                    <FaCar size={30} /> {/* Substituindo ícone externo */}
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">{carro.modelo}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{carro.placa}</p>
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <button 
                                            onClick={() => selectCar(carro)}
                                            className="bg-indigo-300 hover:bg-indigo-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                            <FaSyncAlt size={25} /> {/* Substituindo ícone externo */}
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