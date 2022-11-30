import styled from "styled-components";
import Assets from "../../Assets"
import Colors from "../../Assets/Colors";




export function Header(){
    const Header = styled.div`
        width: 100vw;
        height: 15vh;

        color: #fff;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: space-around;

            .logo{
                background-image: url(${Assets.Logo});
                background-size: cover;
                background-repeat: no-repeat;
                width: 100px;
                height: 100px;
                transition: all .2s;
                :hover{
                    cursor: pointer;
                    width: 80px;
                    height: 80px;                }
            }
            .menu{

                ul{
                    width:50vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    li{

                        display: flex;
                        text-align: center;
                        align-items: center;
                      
                        list-style: none;
                        text-decoration: none;
                        margin-right: 25px;
                        border-radius: 20px;
                        font-size: 13pt;
                        font-weight: 400;
                        transition: all .2s;
                        :hover{
                            color: ${Colors.LightRed};
                            font-weight: 500;
                            cursor: pointer;
                        }
                    }
                }
                .active{
                    color: ${Colors.LightRed};
                    font-weight: 500;

                }
            }
            .login{
                width: 10vw;
                height: 7vh;
                background-color: #ff002be6;
                margin: 5px;
                text-align: center;
                align-items: center;
                justify-content: center;
                display: flex;
                border-radius: 20px;
                transition: all .2s;
                :hover{
                width: 11vw;
                height: 6vh;
                background-color: #ff002be6;
                }
            }
    
    
    `
    return(
        <Header>
            <div className="logo"/>
            <div className="menu">
                <ul>
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
            <div className="login">
                Login
            </div>

        </Header>
    )
}