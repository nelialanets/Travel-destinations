import styled from "styled-components";
import { Link } from "gatsby";


export const Button = styled(Link)`
background:${({primary})=>(primary ? '#f2b98d' : '#077BF1')};
white-space: nowrap;
padding: ${({big})=>(big ? '16px 30px' : '15px 32px')}
color:#fff;
font-size:${({big} )=>(big ? '20px' : '16px')}
outline:none;
border:none;
min-width:100px;
text-decoration: none;
transition:0.5s !important;
border-radius: ${({round}) => (round ? "50px" : "none")}

&:hover{
    background:${({primary})=>(primary ? "#f2b98d" : "#F26A2E" )};
    transform: translateY(-2px);
}
`