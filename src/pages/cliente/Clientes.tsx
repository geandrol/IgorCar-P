import { useState, useEffect } from "react"
import Cliente from "../../models/Cliente"
import ClienteService from "../../service/ClienteService"
import ModalCliente from "../../componentes/modal/ModelCliente";
import ModalListServicos from "../../componentes/modal/ModalListServicos";
import ModalListCarros from "../../componentes/modal/ModalListCarros";
import Carro from "../../models/Carro";


export default function Clientes(){

const service = new ClienteService()
const [cliente, setCliente] = useState<Cliente[]>([]);

async function getAll(){
    const response = await service.getAll()
    setCliente(response)
}

useEffect(() => {
    getAll()    
}, [])

    return(

        <>
        <div className="container mx-auto flex flex-col items-center">
            <ModalCliente/>
            <div className="mx-auto flex flex-row space-x-10 justify-center px-4 py-8">
                {
                    cliente.map((item) => 
                    <div key={item.id} className="max-w-sm min-w-[250px] rounded overflow-hidden shadow-lg h-52">
                        <div className="px-6 py-4">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/>
                        </div>
                        <div className="px-6">
                            <div className="font-bold text-sm mb-2">{item.nome}</div> 
                        </div>
                        <div className="px-6">
                            <div className="text-sm mb-5">{item.contato}</div> 
                        </div>
                        <div className="flex justify-around items-center">
                             <ModalListServicos />
                             <ModalListCarros carros={item.carros} usuario={item.id} />
                            <button className="bg-indigo-300 hover:bg-indigo-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/restart--v1.png" alt="restart--v1"/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>

    )
}