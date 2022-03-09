import React, {FC} from 'react';
import styled from "styled-components";
import {Title} from "./NoNameBlock";
import ArrouWhite from '../../assets/white-arrou.svg'
import investBG from '../../assets/investingBG.svg'
import readmore from '../../assets/readmore.svg'
import stonks from '../../assets/stonksBG.svg'
import { Flex } from '../../uikit/uikit';
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  border-top: 1px solid #DADADA;
  border-bottom: 1px solid #DADADA;
  &:last-child{
    border-bottom: none;  
    margin-top: 122px;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-right: 1px solid #DADADA;
  border-left: 1px solid #DADADA;
`

const Desc = styled.div`
  width: 100%;
  display: flex;
  @media(max-width: 769px){
    display: flex;
    flex-direction: column;
  }
`

const DescText = styled.div`
  width: 830px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  padding: 20px 30px;
  color: #101010;
  @media(max-width: 770px){
    width: 100%;
  }
`

const DescLink = styled.button`
  max-width: 370px;
  background: #F47F1F;
  padding: 20px 79px 18px 78px;
  border-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  @media(max-width: 769px){
    max-width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 79px 10px 78px;
  }
`

const LinkText2 = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
`

const LinkText1 = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    background: url(${ArrouWhite});
    height: 16px;
    width: 15px;
    top: 19%;
    left: 107%;
  }
`
const HowInvest = styled.div`
  max-width: 830px; 
  padding: 30px 30px 107px 30px;
  border-right: 1px solid #DADADA;
  position: relative;
  @media(max-width: 1180px){
    padding: 0;
    max-width: 100vw;
  }
`

const InvestBG = styled.img`
  width: 100%;
  height: 281px;
`

type Props = {
    left?: string | '0';
    top?: string | '0';
    right?: string | '0';
    bottom?: string | '0';
    fontSize?: string | '0';

};

const TextBlock = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`

const HowInvestBtn = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 100%;
  color: #4478BB;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 6px 14px 8px;
  max-width: 161px;
  border-style: none;
`

const HowInvestDesc = styled.div<Props>`
  max-width: 357px;
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.fontSize};
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  /* Белый */
  color: #FFFFFF;
  margin: 20px 0;
  word-wrap: break-word;
`

const ReadMoreBtn = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  border-style: none;
  background: transparent;
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    content: '';
    background: url(${readmore});
    width: 8px;
    height: 13px;
    top: 27%;
    left: 124px;
  }
`

const Stonks = styled.div`
  position: relative;
  padding: 30px 30px 0 30px;
`
const FlexBlock = styled.div`
    display: flex;
    @media(max-width: 1180px){
      display: flex;
      flex-direction: column;
    }
`



const Investing: FC = () => {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Container>
                <Title lineHeight={'36px'} fontSize={'30px'} width={'830px'} padding={'10px 0 10px 30px'}>{t("investing.title")}</Title>
            </Container>
            <Wrapper>
                <Container>
                    <Desc>
                        <DescText>{t("investing.subtitle")}What is an investor to do when the market is volatile? In short: Breathe, don't panic, and stay educated. Here are primers for you to stay smart during volatile trading periods.</DescText>
                        <DescLink><LinkText1>{t("investing.goBlock")}</LinkText1><LinkText2>{t("investing.moreInvest")}</LinkText2></DescLink>
                    </Desc>
                </Container>
            </Wrapper>
            <Container>
                <FlexBlock>
                    <HowInvest><InvestBG src={investBG} alt=""/>
                        <TextBlock top={'60px'} left={'100px'}>
                            <HowInvestBtn>{t("investing.howInvest")}</HowInvestBtn>
                            <HowInvestDesc fontSize={'30px'}>{t("investing.info")}</HowInvestDesc>
                            <ReadMoreBtn>{t("investing.readMore")}</ReadMoreBtn>
                        </TextBlock>
                    </HowInvest>
                    <Stonks>
                        <img src={stonks} alt=""/>
                        <TextBlock left={'60px'} top={'60px'}>
                            <HowInvestBtn>{t("investing.stock")}</HowInvestBtn>
                            <HowInvestDesc fontSize={'24px'} style={{maxWidth: '250px'}}>{t("investing.bayStock")}</HowInvestDesc>
                            <ReadMoreBtn>{t("investing.readMore")}</ReadMoreBtn>
                        </TextBlock>
                    </Stonks>
                </FlexBlock>

            </Container>


        </Wrapper>
    );
};

export default Investing;