import styled from "styled-components";
import Assets from "../../Assets";
import Colors from "../../Assets/Colors";


export default function Card2(props) {
    const Card2 = styled.div`
        width: ${props.width};
        height: 30vh;
        margin-top: 20px;
        border-radius: 10px;
        background: linear-gradient(to top, #00000068 0%, #00000071 50%, #0000008f 100%), url(${props.image});
        background-size: 100%;
        background-repeat: no-repeat;
        transition: all .2s;
            .title{
                color: #FFF;
                margin-top: 10px;
            }
       :hover{
        
        cursor: pointer;
        border: 2px solid ${Colors.LightRed};
            .title{
                color: ${Colors.LightRed};
            }


       }
    `

    return(
        <>
            <Card2>
                <p className="title">
                   {props.location}
                </p>

            </Card2>
        </>
    )
}