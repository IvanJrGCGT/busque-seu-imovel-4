import styled from "styled-components";
import Colors from "../../Assets/Colors";

export function SrcBar(){
    const SrcBar = styled.div`
    width: 60vw;
    height: 15vh;
    border-radius: 20px;
    color: #FFF;


        .menu{

            width:60vw ;
            height: 15vh;

            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;

            
            ul{
                width: 50vw;
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: space-around;
                .item{
                    margin-right: 15px;
                    width: 100%;
                    height: 50px;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;
                    border: solid 1px ${Colors.LightRed};
                    transition: all .2s;
                    :hover{
                        background-color: ${Colors.LightRed};
                        border: white 1px solid;
                        cursor: pointer;
                    }
                }
            }
        }
    
    `

    return(
        <SrcBar>
            <div className="menu">
                <ul>
                    <ul className="item">
                        Localização
                    </ul>
                    <ul className="item">
                        Tipo de imovel
                    </ul>
                    <ul className="item">
                        Preço
                    </ul>
                    <ul className="item">
                        ?
                    </ul>
                </ul>
            </div>
        </SrcBar>
    )
}