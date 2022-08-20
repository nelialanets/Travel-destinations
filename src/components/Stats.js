import React from 'react'
import styled from 'styled-components'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'


    const StatsData = [

        {
            icon:(<GiEarthAmerica  />
            ),
            title: "Over 100 Destinations",
            desc: "Explore Your Horisonts",
        },
        {
            icon:(<MdAirplanemodeActive />),
            title: "Over 1000 trips completed last year",
            desc: "Explore Your Horisonts",
        },
        {
            icon:(<MdTimer />),
            title: "Fast Support",
            desc: "Access to over support team 24/7",
        },
        {
            icon:(<FaMoneyCheck />),
            title: "Best Deals",
            desc: "We offer best prices",
        },
    ]

const Stats =() => {
  return (
   <StatsComponents>
    <Heading> Why US </Heading>
        <Wrapper>

        {StatsData.map((item,index)=>{
                return(
                    <StatsBox key={index}>
                    <Icon>{item.icon}</Icon>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    </StatsBox>
                )
            })}
        </Wrapper>
   </StatsComponents>
  )
}

export default Stats



const StatsComponents =styled.div`
width: 100%;
background:#fff;
color:#000;
display:flex;
flex-direction:column;
justify-content:center;
padding:5rem;
margin-top: 4%;
background-color: #FFF5EE;
`
const Heading =styled.h1`
margin-top: 3rem;
text-aling: center;
font-size: clamp(1.5 rem, 5vw, 2rem);
margin-bottom:3rem;
padding: 0 2rem;

`
const Wrapper =styled.div`
display: grid;
grid-template-columns:repeat(4, 1fr);
grid-gap: 10 px;

@media-screen and( max-width:768px)
{
    grid-template-columns:  1fr
}

@media-screen and( max-width:500px)
{
    grid-template-columns:  1fr
}

`
const StatsBox = styled.div`
height: 100%;
width:100%;
padding: 2rem;

`
const Icon = styled.div`
fonst-size:3rem;
margin-buttom:1rem;
`
const Title= styled.p`
margin-top:2px;
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom"0.5rem
`
const Description = styled.p`
font-size:20px;
`
