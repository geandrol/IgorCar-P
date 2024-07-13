import { useState, useEffect } from "react"
import Cliente from "../../models/Cliente"
import ClienteService from "../../service/ClienteService"
import ModalCliente from "../../componentes/modal/ModelCliente";
import ModalListServicos from "../../componentes/modal/ModalListServicos";
import ModalListCarros from "../../componentes/modal/ModalListCarros";
import ModalClienteEdit from "../../componentes/modal/ModalClienteEdit";
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa'; // Importando ícone do React Icons
import { useNavigate } from "react-router-dom";

export default function Clientes() {

    let navigate = useNavigate()
    function voltar() {
        navigate('/estoque')
    }

    const service = new ClienteService()
    const [cliente, setCliente] = useState<Cliente[]>([]);


    const getAll = async () => {
        const response = await service.getAll()
        setCliente(response)
    }

    useEffect(() => {
        //setCliente([])
        getAll()
    }, [cliente])

    const [buscarPorNome, setBuscarPorNome] = useState("");

    const filteredNome = cliente.filter((cliente) => {
        if (!buscarPorNome) return true;
        return cliente.nome.toLowerCase().includes(buscarPorNome.toLowerCase());
    });
   
    function update() {
        
     }

    return (

        <>
            <div>
                <button className="bg-red-500 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%] " onClick={voltar}>
                    <FaArrowLeft className="mr-2" size={20} /> {/* Substituindo o ícone externo */}
                    <span>Voltar</span>
                </button>                
            </div>

            <div className="container mx-auto flex flex-col items-center">
                <ModalCliente reflash={update} data={{}} />

            <div className="flex justify-center m-5">
                <h1 className="pe-2">Buscar por categoria: </h1>
                <input
                    className="border-2 border-sky-500"
                    type="text"
                    placeholder="Buscar por nome..."
                    value={buscarPorNome}
                    onChange={(e) => setBuscarPorNome(e.target.value)}
                />
            </div>
                <div className="w-[85%] flex flex-wrap justify-center">
                    {
                        filteredNome.map((item) =>
                            <div key={item.id} className="max-w-sm min-w-[250px] rounded overflow-hidden shadow-lg h-52 m-2">
                                <div className="px-6 py-4">
                                    <FaUserCircle size={50} /> {/* Substituindo o ícone externo */}
                                </div>
                                <div className="px-6">
                                    <div className="font-bold text-sm mb-2">{item.nome}</div>
                                </div>
                                <div className="px-6">
                                    <div className="text-sm mb-5">{item.contato}</div>
                                </div>
                                <div className="flex justify-around items-center">
                                    <ModalListServicos cliente={item} />
                                    <ModalListCarros carros={item.carros} usuario={item.id} />
                                    <ModalClienteEdit reflash={update} data={item} />
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </>

    )
}