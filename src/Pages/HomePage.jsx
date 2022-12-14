import styled from "styled-components"
import Assets from "../Assets"
import Casas from '../Assets/Casas'
import Components from "../Components"
export function HomePage(){

     
        const HomePage = styled.div`
        *{
        margin: 0;
        padding: 0;
        }
        width: 100%;
        height: 100vh;
        background: linear-gradient(to top, #00000068 0%, #00000090 50%, #000 100%),url(${Assets.DreamHome});
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
           
        .start{
            width: 100%;
            height: 100vh;
                display:flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                justify-content: space-between;
                .title{
                color: #ffffff;
                font-size: 18pt;
                text-align: center;
                align-items: center;
                justify-content: center;
                display: flex;
                margin-top: -300px;



                }
                .text{
                }
               
        }
        
        
        
        `
        const Recentes = styled.div`
        
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            .title{
                font-size: 18pt;
                
            }
            .cards{
                width: 100vw;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                text-align: center;
                align-items: center;
                justify-content: space-around;
            }
        
        `
        const Catalogo = styled.div`


            margin-top: 50px;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            .title{
                font-size: 18pt;
            }
            .cards{
                display: flex;
                flex-direction: row;
                text-align: center;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }
        
        `
    

    return(

        <>
            <HomePage>
                
                <div className="start">
                    <Components.Header />
                    <div className="text">
                    <p className="title">Seu  futuro im??vel  est?? a poucos cliques <br />
                        de distancia</p>
                    <Components.SrcBar />
                    </div>

                </div>
                </HomePage>

                <Recentes>
                    <p className="title">
                       Municipios mais procurados
                    </p>
                    <div className="cards">
                        <Components.Card2 image={Assets.Esmeraldas} location="Esmeraldas" width="28vw" />
                        <Components.Card2 image={Assets.BeloHorizonte} location="Belo Horizonte"     width="28vw" />
                        <Components.Card2 image={Assets.RibDasNeves} location="Rib. das Neves"      width="28vw" />
                        <Components.Card2 image={Assets.Betim} location="Betim"      width="20vw" />
                        <Components.Card2 image={Assets.Contagem} location="Contagem"       width="45vw" />
                        <Components.Card2 image={Assets.MateusLeme} location="MateusLeme"       width="20vw" />
                        
                    </div>
                    
                </Recentes>

                <Catalogo>
                        <p className="title">
                            Veja algumas op????es
                        </p>
                        <div className="cards">
                        <Components.Card image={Casas.PqMontreal[3]} title={Casas.PqMontreal[0]} price={Casas.PqMontreal[1]}/>
                        <Components.Card image={Casas.PqMusique[2]}/>
                        <Components.Card image={Casas.PqSaoJoao[2]}/>
                        <Components.Card image={Casas.ResMarajo[2]}/>
                        <Components.Card image={Casas.PqMontreal[4]}/>
                        <Components.Card image={Casas.PqMusique[3]}/>
                        <Components.Card image={Casas.ResPequim[3]}/>
                        <Components.Card image={Casas.ResMataA[2]}/>
                        </div>
                        </Catalogo>
            
   
                
           
        </>
    )
}