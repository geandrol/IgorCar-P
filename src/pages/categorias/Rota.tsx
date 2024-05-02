import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Rota(){
    const navigate = useNavigate()

    useEffect(() => {
        // Aqui você pode chamar a função useNavigation ou qualquer outra lógica que você precise executar
        navigate("/listarCategoria");
      }, []);

    
    return(
        <>

        </>
    );
}
export default Rota;