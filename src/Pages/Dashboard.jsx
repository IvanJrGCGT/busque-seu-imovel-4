import styled from "styled-components";
import Assets from "../Assets";


export default function Dashboard(props) {
    const Dashboard = styled.div`
        width: 100vw;
        height: max-content;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
    
    
    `
    const LateralE = styled.div`
    width: 10vw;
    height: 100vh;
    img{
        width: 70%;
    }
      
    `    
    const Centro = styled.div`
    width: 75vw;
    background-color:red ;
        height: 100vh;

    `    
    const LateralD = styled.div`
    width: 20vw;
    background-color:blue ;
        height: 100vh;

    `



    return(
        <Dashboard>
            <LateralE>
                <img src={Assets.Logo} alt="" />
                <ul className="menu">
                    <li className="item">
                        Inicio
                    </li>
                    <li className="item">
                        Imoveis
                    </li>
                    <li className="item">
                        Clientes
                    </li>
                    <li className="item">
                        Financeiro
                    </li>
                    <li className="item">
                        Configurações
                    </li>
                    <li className="item">
                        Sair
                    </li>
                </ul>
            </LateralE>
{/*             <Centro>
C
            </Centro>
            <LateralD>
F
            </LateralD> */}
        </Dashboard>

    )
}