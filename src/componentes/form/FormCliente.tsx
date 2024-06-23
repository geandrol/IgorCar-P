import { useEffect, useRef, useState } from "react";
import Cliente from "../../models/Cliente";
import ClienteService from "../../service/ClienteService";

function FormCliente({ reflash, data}: any) {

    const [cliente, setCliente] = useState<Cliente>();
    const formElement = useRef<HTMLFormElement>(null);
   
    const service = new ClienteService();

    useEffect(() => {
        if(data) {
            setCliente(data)
         }

    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!cliente) return

        if (cliente) {
            await service.update(cliente);
            alert('Feito ajuste com sucesso');
            reflash()
        } else {
            await service.save(cliente);
            alert('Feito ajuste com sucesso');
            reflash()
        }
        setCliente({} as Cliente)
        resetForm()
    }

    function resetForm() {
        setCliente({} as Cliente)
        formElement.current?.reset()
    }

    return(
        <>
            <div className="container flex flex-col mx-auto items-center">
                <h1 className="text-4xl text-black text-center my-8">Cliente</h1>
                <form ref={formElement} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                placeholder="Nome"
                                name="nome"
                                value={cliente?.nome || ''}
                                onChange={(e) => setCliente({ ...cliente, nome: e.target.value } as Cliente)}
                                required
                                className="border-2 border-slate-700 rounded p-2"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="placa">Contato</label>
                            <input
                                type="text"
                                placeholder="Contato"
                                name="contato"
                                value={cliente?.contato || ''}
                                onChange={(e) =>
                                    setCliente({
                                        ...cliente,
                                        contato: e.target.value
                                    } as Cliente)}
                                required
                                className="border-2 border-slate-700 rounded p-2"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">

                        <button
                            type="submit"
                            className='rounded disabled:bg-slate-200 bg-indigo-400 
                            hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'
                        >
                            Confirmar
                        </button>
                    </div>
                </form>
                <input type="button" value="Limpar Formulário" onClick={resetForm} className="rounded bg-red-400 hover:bg-red-800 text-white font-bold w-[12.4rem] mx-auto block py-2 mt-2" />
            </div>
        </>
    )
}
export default FormCliente;