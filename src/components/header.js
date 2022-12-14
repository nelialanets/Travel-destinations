import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {FaBars} from 'react-icons/fa'
import { menuData } from "../data/menueData"
import { Button } from "./Button"
const Header = () => {
  return(
   <Nav>
    <NavLink to='/'> EXPLORE </NavLink>
    <Bars />

    <NavMenu>
      {menuData.map((item, index)=>(
        <NavLink to={item.link} key={index}> {item.title}</NavLink>
      ))}
    </NavMenu>
    <NavBtn>
        <Button  to ='/index' css={`border-radius: 2px; padding: 500%; color: white;  width: 50%; margin-top: 20px; backGround:black;`}>Let Travel!</Button>  
    </NavBtn>
   </Nav>
  )
}



export default Header

const Nav=styled.nav`
background: black;
height:80px;
display:flex;
justify-content:space-between;
padding:0.5rem calc((100vw -1300px)/2)
z-index:100;
position:relative;
`

const NavLink=styled(Link)`
color:#fff;
display: flex;
align-items: center;
text-decoration:none;
padding: 0 1rem;
height: 100% auto;
z-index:100;
cursor: pointer;

`
const Bars =styled(FaBars)`
display:none;
color:#fff;
margin:50%
@media screen and (max-width:768px){
 display:block;
  position: absolute;
  top:0;
  right:0;
   transform: translate(-100%, 75%);
   font-size:0.5rem
}`

const NavMenu=styled.div`
display:flex;
align-items: center;
margin-right:5%;
@media screen and (max-width:768px){
display:none;
`

const NavBtn = styled.div`
display: flex;
align-items:center;
margin-right:24px;
@media screen and (max-width:768px){
  display:none;

`





