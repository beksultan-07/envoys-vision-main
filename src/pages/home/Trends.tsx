import React, {FC} from 'react';
import styled from "styled-components";
import BG from '../../assets/techTrends.jpg'
import respBG from '../../assets/respBg.jpg'
import respBG1 from '../../assets/respBg1.jpg'
import {useTranslation} from "react-i18next";


const Wrapper = styled.div`
 width: 100%;
  height: 450px;
  background: url(${BG}) 0 0 / cover;
  display: flex;
  align-items: center;

  @media (max-width: 766px) {
        background: url(${respBG}) 0 0 / cover;
    }

    @media (max-width: 600px) {
        background: url(${respBG1}) 0 0 / cover;
    }
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
  font-family: Exo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  max-width: 570px;
  @media(max-width: 766px){
    font-size: 36px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    }
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
  @media(max-width: 766px){
    font-size: 18px;
  }
 @media (max-width: 600px) {
    font-size: 16px;
    } 

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
  margin: ${(props) => props.margin};
  width: 270px;
  cursor: pointer;
   @media(max-width: 766px){
    font-size: 14px;
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 55px;
    font-size: 16px;
    
   } 
`


const Trends : FC = () => {
     const {t} = useTranslation()
    return (
     <Wrapper>
         <Container>
             <TrendsText>
                 <TrendsTitle>{t("trend.title")}</TrendsTitle>
                 <TrendsSubtitle>{t("trend.subtitle")}</TrendsSubtitle>
                 <ActionBtn margin={'0'}>{t("home.button")}</ActionBtn>
             </TrendsText>
         </Container>


     </Wrapper>
    );
};

export default Trends;