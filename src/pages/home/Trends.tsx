import React, {FC} from 'react';
import styled from "styled-components";
import BG from '../../assets/techTrends.png'

const Wrapper = styled.div`
 width: 100%;
  height: 450px;
  background: url(${BG}) 0 0 / cover;
  display: flex;
  align-items: center;
`

const Container = styled.div`
 width: 1200px;
  margin: 0 auto;
`

const TrendsText = styled.div`
display: flex;
  flex-direction: column;
  margin-left: 29px;
  align-items: start;
  `


const TrendsTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  max-width: 570px;
`

const TrendsSubtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  max-width: 470px;
  margin: 30px 0 40px;

`

type Props = {
    margin?: string | '0';
};


 export const ActionBtn = styled.button <Props>`
  font-style: normal;
  border-style: none;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #F47F1F;
  border-radius: 2px;
  height: 60px;
  padding: 0 20px;
   width: 270px;
   margin: ${(props) => props.margin};
`


const Trends : FC = () => {
    return (
     <Wrapper>
         <Container>
             <TrendsText>
                 <TrendsTitle>Nasdaq Decodes:
                     Tech Trends</TrendsTitle>
                 <TrendsSubtitle>Discover the technology trends that are driving the global markets forward</TrendsSubtitle>
                 <ActionBtn margin={'0'}>Призыв к действию</ActionBtn>
             </TrendsText>
         </Container>


     </Wrapper>
    );
};

export default Trends;