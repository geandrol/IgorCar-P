import { useState, useEffect } from "react"
import Cliente from "../../models/Cliente"
import ClienteService from "../../service/ClienteService"
import ModalCliente from "../../componentes/modal/ModelCliente";
import ModalListServicos from "../../componentes/modal/ModalListServicos";
import ModalListCarros from "../../componentes/modal/ModalListCarros";
import ModalClienteEdit from "../../componentes/modal/ModalClienteEdit";
import PageNataServico from "../../componentes/print/PageNataServico";
import { useNavigate } from "react-router-dom";

export default function Clientes() {

    let navigate = useNavigate()
    function voltar() {
        navigate('/home')
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


    function update() {

    }

    return (

        <>
            <div>
                <button className="bg-red-900 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%] " onClick={voltar}>
                    <span>Voltar</span>
                </button>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <ModalCliente reflash={update} data={{}} />
                <div className="mx-auto flex flex-row space-x-10 justify-center px-4 py-8">
                    {
                        cliente.map((item) =>
                            <div key={item.id} className="max-w-sm min-w-[250px] rounded overflow-hidden shadow-lg h-52">
                                <div className="px-6 py-4">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
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