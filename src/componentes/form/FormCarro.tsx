import { useEffect, useRef, useState } from "react";
import Carro from "../../models/Carro";
import CarroService from "../../service/CarroService";
import Cliente from "../../models/Cliente";

function FormCarro({data, usuario, add, edit}: any) {
    
    const [carroNew, setCarroNew] = useState<Carro>(data);
    const [carroSave, setCarroSave] = useState<Carro>();
    const [idCliente, setIdCliente] = useState<number>(usuario);
    const formElement = useRef<HTMLFormElement>(null);

    const service = new CarroService();

    useEffect(() => {
        setIdCliente(usuario)
        setCarroNew(data)
       

    }, [data]);

   
    


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setCarroSave({
            ...carroNew,
            cliente: {
                id: idCliente
            } as Cliente
        })

        if (carroSave?.modelo === null || carroSave?.modele === null || carroSave?.placa === '') 
            console.log('Preencha todos os campos')
        
        console.log(carroSave)
       
/*
        try{
            if (!carroSave) return

            if (carroNew.id) {
                await service.update(carroSave);
                alert('Carro atualizado com sucesso');
                edit(carroSave)
            } else {
                await service.save(carroSave);
                alert('Carro cadastrado com sucesso');
                add(carroSave)
            }
            setCarroNew({} as Carro)
            setCarroSave({} as Carro)
            resetForm()
            
        } catch (error: any) {
            console.error('Erro:', error.message);
            alert('Erro ao processar o Carro');
        }      */   
    };

    function resetForm() {
        setCarroNew({} as Carro)
        setCarroSave({} as Carro)
        formElement.current?.reset()
       
        
    }
    
    return(
        <>
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Carro</h1>
            <form ref={formElement} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="modelo">Modelo</label>
                        <input
                            type="text"
                            placeholder="Modelo"
                            name="modelo"
                            value={carroNew?.modelo || ''}
                            onChange={(e) => setCarroNew({...carroNew, modelo: e.target.value, modele: e.target.value})}
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="placa">Placa</label>
                        <input
                            type="text"
                            placeholder="Placa"
                            name="placa"
                            value={carroNew?.placa || ''}
                            onChange={(e) => setCarroNew({...carroNew, placa: e.target.value})}
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
                        Cadastrar
                    </button>
               </div>
            </form>
            <input type="button" value="Limpar Formulário" onClick={resetForm} className="rounded bg-red-400 hover:bg-red-800 text-white font-bold w-[12.4rem] mx-auto block py-2 mt-2" />
            

            
        </div>
        </>
     
        
    )
}
export default FormCarro;