import React from 'react';
import styled from "styled-components";
// @ts-ignore
import playBtn from '../../assets/play-btn.svg'
// @ts-ignore
import handCoin from '../../assets/hand-coin-fill.svg'
// @ts-ignore
import changes from '../../assets/home/changes .svg'
// @ts-ignore
import funds from '../../assets/funds-box-fill.svg'
import {Flex} from "../../uikit/uikit";
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';



const Grids = styled.div`
width: 100%;
  border-bottom: 1px solid #DADADA;
  display: flex;
`

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const FirstBlock = styled.div`
 width: 100%;
  height: 203px;
  display: flex;
`

const GridItem1 = styled.div`
  width: 400px;
  height:203px;
  border-right: 1px solid #DADADA;
  border-left: 1px solid #DADADA;
  &:first-child{
    display: flex;
    align-items: end;
  }
  @media(max-width: 1199px){
    border-right: none;
    border-left: none;
    &:nth-child(2){
      display: none;
    }
    &:nth-child(3){
      display: none;
    }
  }
  @media(max-width: 571px){
    width: 100%;
  }
`

const GridItem3 = styled.div`
  position: relative;
  width: 400px;
  max-height:303px;
  border-right: 1px solid #DADADA;
  padding: 146px 51px 102px 30px;
  border-left: 1px solid #DADADA;
  display: flex;
  margin: 0 auto;
  @media(max-width: 1200px){
    border: none;
    width: 300px;
    padding: 20px 51px 30px 17px;
    &:first-child{
      padding: 146px 0 30px 0 ;
      display: flex;
      justify-content: center;
      width: 100%;
    };
  }
`

const GridItem2 = styled.div`
  width: 400px;
  height:256px;
  border-right: 1px solid #DADADA;
  border-left: 1px solid #DADADA;
  padding: 30px 39px 35px 31px;
  &:last-child{
    border-top: 1px solid #DADADA;
    //margin: 0 auto;
  }
  @media(max-width: 1199px){
    display: flex;
    justify-content: space-between;
    border-right: 1px solid  #DADADA;
    border-left: 1px solid  #DADADA;
    border-bottom: 1px solid  #DADADA;
    &:last-child{
      margin: 10px auto 0;
    }
  }
  @media(max-width: 800px){
    width: 100%;
    border-right: none;
    border-left: none;
    display: flex;
    justify-content: center;
  }
`

const Events = styled.div`
display: flex;
  flex-direction: column;
`

const EventTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #045599;
  margin-right: 20px;
  @media(max-width: 400px){
    font-size: 22px;
  }
`

const EventQuantity = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #979797;
`

const Title = styled.div`
 width: 100%;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4478BB;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding-left: 30px;
  color: #FFFFFF;
  @media(max-width: 400px){
    font-size: 25px;
  }
`

const Title2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
 width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4478BB;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding-left: 30px;
  color: #FFFFFF;
  @media(max-width: 1200px){
    font-size: 26px;
    align-items: center;
    max-height: 100px;
  }
  @media(max-width: 400px){
    font-size: 20px;
  }
`

const BlueEllipse = styled.img`
  background: #4478BB;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  padding: 7px;
  @media(max-width: 400px){
    width: 35px;
    height: 35px;
  }
`
const OrangeEllipse = styled.img`
  background: #F47F1F;
  width: 40px;
  height:40px;
  border-radius: 50%;
  padding: 7px;
  @media(max-width: 400px){
    width: 35px;
    height: 35px;
  }
`

const EventDetalis = styled.div`
 display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
`

const EventLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  color: #045599;
  transition: .1s;
  :hover{
      font-size: 16px;
  }
`

const EventDate = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: right;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #101010;
`

const ActiveDollar = styled.div`
 display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 10px;
`

const ActiveName = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  letter-spacing: 0.02em;
  color: #101010;
  @media(max-width: 400px){
    font-size: 14px;
  }
  
`

const ActiveValue = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  letter-spacing: 0.02em;
  color: #101010;
  margin: 15px 0;
  @media(max-width: 400px){
    font-size: 14px;
  }
`

const Income = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  letter-spacing: 0.02em;
  color: #2FAF72;
  @media(max-width: 400px){
    font-size: 14px;
  }
`




const Grid = () => {
    const {t} = useTranslation()
    return (
        <>
            <Grids>
                <Container>
                    <GridItem1><Title>{t("event.title")}</Title></GridItem1>
                    <GridItem1></GridItem1>
                    <GridItem1></GridItem1>
                </Container>
            </Grids>
            <Grids>
                <Container>
                    <GridItem2>
                        <Events>
                            <Flex margin={'0 0 40px 0 '} justify={"space-between"}>
                       <div>
                           <EventTitle>{t("event.earning")}</EventTitle>
                           <EventQuantity>410 {t("event.eventCount")}</EventQuantity>
                       </div>
                       <div>
                           <BlueEllipse src={playBtn}/>
                           <OrangeEllipse src={changes}/>
                       </div>
                            </Flex>
                            <EventDetalis>
                                <EventLink to='#'>NXP Semiconductors N.V.</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink to='#'>Southern Copper Corporation</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink to='#'>L3Harris Technologies, Inc.</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                    </Events>
                    </GridItem2>
                    <GridItem2>
                        <Events>
                            <Flex margin={'0 0 40px 0 '} justify={"space-between"}>
                                <div>
                                    <EventTitle>{t("dividends")}</EventTitle>
                                    <EventQuantity>120 {t("event.eventCount")}</EventQuantity>
                                </div>
                                <div>
                                    <BlueEllipse src={playBtn}/>
                                    <OrangeEllipse src={handCoin}/>
                                </div>
                            </Flex>
                            <EventDetalis>
                                <EventLink to='#'>The AES Corporation</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink to='#'>Ally Financial Inc.</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink to='#'>Ames National Corporation</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                        </Events>
                    </GridItem2>
                    <GridItem2>
                        <Events>
                            <Flex margin={'0 0 40px 0 '} justify={"space-between"}>
                                <div>
                                    <EventTitle>{t("event.stock")}</EventTitle>
                                    <EventQuantity>4 {t("event.eventCount")}</EventQuantity>
                                </div>
                                <div>
                                    <BlueEllipse src={playBtn}/>
                                    <OrangeEllipse src={funds}/>
                                </div>
                            </Flex>
                            <EventDetalis>
                                <EventLink to='#'>Angel Gold Corp</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink to='#'>Puxin Limited</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink to='#'>SMART Global Holdings, Inc.</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>

                        </Events>
                    </GridItem2>
                </Container>
            </Grids>
            <Grids>
                <Container>
                    <GridItem3>
                        <Title2>{t("event.dollarActive")}</Title2>
                       <Flex justify={"space-between"}>
                           <ActiveDollar>
                               <ActiveName>Envoys-100</ActiveName>
                               {/*//прайс*/}
                               <ActiveValue>14438.4</ActiveValue>
                               <Income>+408.06 +2.75%</Income>
                           </ActiveDollar>
                           <ActiveDollar>
                               <ActiveName>Envoys-100</ActiveName>
                               {/*//прайс*/}
                               <ActiveValue>14438.4</ActiveValue>
                               <Income>+408.06 +2.75%</Income>
                           </ActiveDollar>
                       </Flex>
                    </GridItem3>
                    <GridItem3>
                        <Flex justify={"space-between"}>
                            <ActiveDollar>
                                <ActiveName>Envoys-100</ActiveName>
                                {/*//прайс*/}
                                <ActiveValue>14438.4</ActiveValue>
                                <Income>+408.06 +2.75%</Income>
                            </ActiveDollar>
                            <ActiveDollar>
                                <ActiveName>Envoys-100</ActiveName>
                                {/*//прайс*/}
                                <ActiveValue>14438.4</ActiveValue>
                                <Income>+408.06 +2.75%</Income>
                            </ActiveDollar>
                        </Flex>
                    </GridItem3>
                    <GridItem3>
                        <Flex justify={"space-between"}>
                            <ActiveDollar>
                                <ActiveName>Envoys-100</ActiveName>
                                {/*//прайс*/}
                                <ActiveValue>14438.4</ActiveValue>
                                <Income>+408.06 +2.75%</Income>
                            </ActiveDollar>
                            <ActiveDollar>
                                <ActiveName>Envoys-100</ActiveName>
                                {/*//прайс*/}
                                <ActiveValue>14438.4</ActiveValue>
                                <Income>+408.06 +2.75%</Income>
                            </ActiveDollar>
                        </Flex>
                    </GridItem3>
                </Container>
            </Grids>
        </>
    );
};

export default Grid;