import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../videos/video.mp4'
const Hero = () => {
  return (
  <HeroContainer>
       <HeroBlog>
            <VideoBlog src={Video} type="video/mp4" autoPlay loop muted playsInline>
         </VideoBlog>
        </HeroBlog>
<HeroContent>
    <HeroItems>
    <H1tag>The advanture awaits for you </H1tag>
    <Ptag> Explore the World's best surf breaks </Ptag>
     <Button primary="true" big="tue" round="true" to='/trips' css={`border-radius: 20px;  width: 50%; margin-top: 20px`}> Let's GO</Button>
    </HeroItems>
    </HeroContent>
</HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content:center;
color: #fff;
align-items: center;
height:100vh;
padding: 0 1rem;
position:relative;
margin-top-80px;

 :before{
    content:'';
    position:absolute;
    top:0;
    buttom:0;
    right:0;
    left:0;
    z-index:2;
    background:linear-gradient(
         180deg,
         rgba(0,0, 0, 0.2)0%,
         rgba(0,0, 0, 0.6)100%,
    ),
    linear-gradient(
        180deg,
         rgba(0,0, 0, 0.2)0%,
         transparent:100%)
}
`

const HeroBlog=styled.div`
position: absolute;
top:0;
buttom:0;
left:0;
width:100%;
height:100%;
overfolow:hidden;

`

const HeroItems= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
height: 100vh;
max-height:100%;
padding:0;
color#fff;
line-height: 4rem;
font-weight: bold;
`


const VideoBlog = styled.video`
width:100%;
height:100%;
o-object-fit:cover;
object-fit:cover;
`

const HeroContent = styled.div`
z-index:3;
height:calc(100vh -80px);
max-height:100%
padding: 0rem clac((100vh - 130px)/2)
`
const H1tag = styled.h1`
font-size:clamp(1.5 rem, 6vw, 4rem)// clamp is fore responsive text to awaide using media query
letter-spacing:10px;
padding: 0 1rem;
`
const Ptag = styled.p`
font-size:clamp(1rem, 3vw, 3rem);
margin-buttom: 5rem;
font-weight: 100px; 


`