import styled from "styled-components"
import Assets from "../../Assets"
import Colors from "../../Assets/Colors"

 

export default function Card(props) {
    const Card = styled.div`
    margin: 30px 15px;
    width:20vw;
    height: 55vh;
    background-color: #FFF;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-around;

        .img{
            background: linear-gradient(to bottom, #0000001a 0%, #05030342 50%, #05030342 80%, #ffffff 90%),url(${props.image});
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 20px;


            width: 100%;
            height: 100%;
            transition: all .2s;


            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: space-between;
            :hover{
                cursor: pointer;
            }
            .title{
                color: ${Colors.LightRed};
            }
            .price{
                color: green;
            }
        }
    
    `

    return(
        <Card>
            <div className="img">
                <p className="title">
                    {props.title}
                </p>
                <p className="price">
                    {props.price}
                </p>
            </div>
            
        </Card>

    )
}