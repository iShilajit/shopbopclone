
// import styled from 'styled-components';
import styled from "styled-components";


export const Men=styled.div`
display:flex;
margin:auto;
justify-content:center;
`;


export const Product =styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width:90%;
gap:10px;


`;




export const Inner=styled.div`
height:490px;
line-height:15px;
text-align:center;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
:hover{
    background:black;
    color:white;
}
`
