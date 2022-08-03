import styled from "styled-components";
import { Link } from "gatsby";


export const Button = styled(Link)`
background:${({primary})=>(primary ? '#fff' : '#fff')};
white-space: nowrap;
padding: ${({big})=>(big ? '16px 30px' : '20px 32px')}
color:#fff;
font-size:${({big} )=>(big ? '20px' : '16px')}
outline:none;
border:none;
min-width:100px;
text-decoration: none;
transition:0.5s !important;
border-radius: ${({round}) => (round ? "5px" : "none")}

&:hover{
    background:${({primary})=>(primary ? "#fff" : "#fff" )};
    transform: translateY(-2px);
}
`