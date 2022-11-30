import styled from "styled-components";
import Assets from "../../Assets";
import Colors from "../../Assets/Colors";

export default function Footer() {
    const Footer = styled.div`
    width: 100vw;
    height: 20vh;
    background-color: ${Colors.MidnightBlue};
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;

        .one{
            width: 10vw;
            height: 18vh;
            background: url(${Assets.Logo});
            background-size: contain;
            background-repeat: no-repeat;
        }
        .two{
            width: 40vw;
            height: 18vh;
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
            ul{
                width: 100%;
                list-style: none;
                text-decoration: none;
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: space-between;
                color: #FFF;
                    li{
                    width: 100%;
                    list-style: none;
                    text-decoration: none;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: space-around;
                    color: #FFF;
                    :hover{
                        color:${Colors.LightRed};
                        cursor: pointer;
                    }
            }
            }

            .trhee{
            width: 10vw;
            height: 18vh;
               
            }
            .active{
                color:${Colors.LightRed}
            }
        }
            img{
                    width: 90px;
                }


                .one, .trhee{
                    :hover{
                        cursor: pointer;
                    }
                }
    `

    return(
        <Footer>

            <div className="one" />
            <div className="two">
                <ul className="menu">
                    <li className="item active">
                        Inicio
                    </li>
                    <li className="item">
                        Apartamentos
                    </li>
                    <li className="item">
                        Casas
                    </li>
                    <li className="item">
                        Lotes
                    </li>
                    <li className="item">
                        Sobre
                    </li>
                </ul>
            </div>
            <div className="trhee">
                    <img src={Assets.wpp} alt="" />
            </div>
        </Footer>

    )
}