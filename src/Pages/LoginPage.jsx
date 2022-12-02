import styled from "styled-components";
import Assets from '../Assets'
import Colors from "../Assets/Colors"
export default function LoginPage() {
    const LoginPage = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;

    `
    const Right = styled.div`
        width: 50vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;

            .logo{
                width: 15vw;
                height: 15vh;
                margin-bottom: 100px;
                background-size: contain;
                background-repeat: no-repeat;
                img{
                    width: 100%;
                }
            }
            .login{
                font-size: 18pt;
            }
            .forms{
                width: 50%;
                height: 30vh;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: space-around;
                .input{
                    width: 80%;
                    height: 30px;
                    text-align: center;
                    border: solid 1px ${Colors.LightRed};
                    border-radius: 10px;
                }
                .btns{
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    text-align: center;
                    align-items: center;
                    justify-content: space-between;
                    .btn{
                        width: 49%;
                        border: 1px solid ${Colors.LightRed};
                        border-radius: 10px;
                        transition: all .2s;
                        :hover{
                            cursor: pointer;
                            border-radius: 20px;
                        }
                    }
                }
            }
    `    

    const Left = styled.div`
            width: 50vw;
            height: 100vh;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            img{
                width: 65%;
            }
    `

    return(
        <LoginPage>
            
       
            <Left>
                <img src={Assets.LoginImg} alt="" />
            </Left>
            <Right>
                <div className="logo">
                    <img src={Assets.Logo} alt="" />
                </div>
                <p className="login">Login</p>
                <div className="forms">
                    <input type="text" name="email" className="input" placeholder="Email" />
                    <input type="password" name="password" className="input" placeholder="Senha" />
                    <div className="btns">
                        <div className="btn ">Fazer login</div>
                        <div className="btn ">Cadastre-se</div>
                    </div>
                </div>
            </Right> 


        </LoginPage>
    )
}