import React from 'react';
import styled from "styled-components";
import playBtn from '../../assets/play-btn.svg'
import handCoin from '../../assets/hand-coin-fill.svg'
import changes from '../../assets/home/changes .svg'
import funds from '../../assets/funds-box-fill.svg'
import {Flex} from "../../uikit/uikit";
import {useTranslation} from "react-i18next";



const Grids = styled.div`
width: 100%;
  border-bottom: 1px solid #DADADA;
  display: flex;
`

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
  display: flex;
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
`

const GridItem3 = styled.div`
  position: relative;
  width: 400px;
  height:303px;
  border-right: 1px solid #DADADA;
  border-left: 1px solid #DADADA;
  padding: 146px 51px 102px 30px;
`

const GridItem2 = styled.div`
  width: 400px;
  height:256px;
  border-right: 1px solid #DADADA;
  border-left: 1px solid #DADADA;
  padding: 30px 39px 35px 31px;
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
  /* Белый */

  color: #FFFFFF;
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
  /* Белый */

  color: #FFFFFF;
`

const BlueEllipse = styled.img`
  background: #4478BB;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  padding: 7px;
`
const OrangeEllipse = styled.img`
  background: #F47F1F;
  width: 40px;
  height:40px;
  border-radius: 50%;
  padding: 7px;
`

const EventDetalis = styled.div`
 display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
`

const EventLink = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: 0.02em;
  text-decoration-line: underline;

  color: #045599;
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
`

const ActiveName = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  letter-spacing: 0.02em;
  color: #101010;
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
`

const Income = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  letter-spacing: 0.02em;
  color: #2FAF72;
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
                                <EventLink>NXP Semiconductors N.V.</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink>Southern Copper Corporation</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink>L3Harris Technologies, Inc.</EventLink>
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
                                <EventLink>The AES Corporation</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink>Ally Financial Inc.</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink>Ames National Corporation</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                        </Events>
                    </GridItem2>
                    <GridItem2>
                        <Events>
                            <Flex margin={'0 0 40px 0 '} justify={"space-between"}>
                                <div>
                                    <EventTitle>{t("stock")}</EventTitle>
                                    <EventQuantity>4 {t("event.eventCount")}</EventQuantity>
                                </div>
                                <div>
                                    <BlueEllipse src={playBtn}/>
                                    <OrangeEllipse src={funds}/>
                                </div>
                            </Flex>
                            <EventDetalis>
                                <EventLink>Angel Gold Corp</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink>Puxin Limited</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>
                            <EventDetalis>
                                <EventLink>SMART Global Holdings, Inc.</EventLink>
                                <EventDate>01/31/2022</EventDate>
                            </EventDetalis>

                        </Events>
                    </GridItem2>
                </Container>
            </Grids>
            <Grids>
                <Container>
                    <GridItem3>
                        <Title2>НАИБОЛЕЕ АКТИВНЫЕ ПО ДОЛЛАРОВОМУ ОБЪЕМУ</Title2>
                       <Flex justify={"space-between"}>
                           <ActiveDollar>
                               <ActiveName>NASDAQ-100</ActiveName>
                               {/*//прайс*/}
                               <ActiveValue>14438.4</ActiveValue>
                               <Income>+408.06 +2.75%</Income>
                           </ActiveDollar>
                           <ActiveDollar>
                               <ActiveName>NASDAQ-100</ActiveName>
                               {/*//прайс*/}
                               <ActiveValue>14438.4</ActiveValue>
                               <Income>+408.06 +2.75%</Income>
                           </ActiveDollar>
                       </Flex>
                    </GridItem3>
                    <GridItem3>
                        <Flex justify={"space-between"}>
                            <ActiveDollar>
                                <ActiveName>NASDAQ-100</ActiveName>
                                {/*//прайс*/}
                                <ActiveValue>14438.4</ActiveValue>
                                <Income>+408.06 +2.75%</Income>
                            </ActiveDollar>
                            <ActiveDollar>
                                <ActiveName>NASDAQ-100</ActiveName>
                                {/*//прайс*/}
                                <ActiveValue>14438.4</ActiveValue>
                                <Income>+408.06 +2.75%</Income>
                            </ActiveDollar>
                        </Flex>
                    </GridItem3>
                    <GridItem3>
                        <Flex justify={"space-between"}>
                            <ActiveDollar>
                                <ActiveName>NASDAQ-100</ActiveName>
                                {/*//прайс*/}
                                <ActiveValue>14438.4</ActiveValue>
                                <Income>+408.06 +2.75%</Income>
                            </ActiveDollar>
                            <ActiveDollar>
                                <ActiveName>NASDAQ-100</ActiveName>
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