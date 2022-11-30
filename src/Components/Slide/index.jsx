import styled from "styled-components";
import Assets from "../../Assets";
import Colors from "../../Assets/Colors";

export function Slide(){
    
    const Slide = styled.div`
    width: 80vw;
    height: 80vh;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    background-color: #FFF;

        .text{
            margin-top: 25px;
            width: 60vw;
            font-size: 18pt;
            text-align: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
                .find{
                    margin-top: 25px;
                    border: 1px solid ${Colors.LightRed};
                    width: 40%;
                    border-radius: 20px;
                    color: ${Colors.LightRed};
                    transition: all .2s;
                    :hover{
                        border-radius: 0px;
                        color: ${Colors.LightRed};
                        border: solid 1px  ${Colors.LightRed};
                        cursor: pointer;

                    }
                }
        }
        .img{
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            img{
            width: 500px;
            transition: all .2s;
            :hover{
                width: 480px;
                cursor: pointer;
            }
            
        }

        }

    
    
    `
    return(
        <>
            <Slide>
                <div className="text">
                    <p className="title">
                        O seu imóvel ideal está a poucos <br />cliques de distancia
                    </p>
                    <div className="find">
                        Encontrar
                    </div>
                </div>
               <div className="img">
               <img src={Assets.plantHouse} alt="" />
               </div>
            </Slide>
        </>
    )
}