import React from "react";
import styled from "styled-components";


const Destinations =()=>{
    return(
<DestinationsContainer>
    <DestinationsHeading>Headind</DestinationsHeading>
    <DestinationsWrapper></DestinationsWrapper>
</DestinationsContainer>

    )
}

export default Destinations

 const DestinationsContainer= styled.div`
 min-height: 100vh;
 padding: 5rem calc((100vw - 1300px)/2)
 background: red;
 color:#fff;
 `
 const DestinationsHeading= styled.div`
 font-size: clamp(1.2rem, 5vw, 3rem);
 text-align: center;
 margin-buttom:5rem;
 color:#000;
 `
 const DestinationsWrapper= styled.div``
