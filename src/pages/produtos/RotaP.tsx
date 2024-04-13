import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function RotaP(){
    const navigate = useNavigate()

    useEffect(() => {
        // Aqui você pode chamar a função useNavigation ou qualquer outra lógica que você precise executar
        navigate("/listarProduto");
      }, []);

    
    return(
        <>

        </>
    );
}
export default RotaP;