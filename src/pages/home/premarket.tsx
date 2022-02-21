import React, {FC} from 'react';
import styled from 'styled-components'
import {LineChart, Line} from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Vector from '../../assets/Vector.png'

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #DADADA;
  display: flex;
  margin-top: 100px ;
  justify-content: center;
`

const PreMarket = styled.div`
    max-width: 798px;
    border-left: 1px solid #DADADA;
`

const PreMarketHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;   
  border-bottom: 1px solid #DADADA;
  padding-left: 29px;
`
// PRM = это сокращение от PreMarket
const PrmHeaderTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  letter-spacing: 0.02em; 
  align-items: center;
`

const HeaderBtns = styled.div`
 display: flex;
`

const HeaderBtn = styled.button`
  height: 58px;
  padding: 0 37px;
  background: #E6E6E6;
  border-style: none;
  color: #898989;
  &:first-child{
    background: #4478BB;
    color: white;
    font-weight: bold;
  }
`

const CompositeIndexBlock = styled.div`
    display: flex;
    margin-top: 22px;
    padding-left: 29px;
`

const CompositeIndexBox = styled.div`
max-width: 210px;
  margin-right: 200px;
`
const IndexText = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  margin-bottom: 20px;
  letter-spacing: 0.02em;
  color: #101010;
  &:last-child{
    margin-bottom: 30px;
  }
  
`

const ChartBlock = styled.div`
display: flex;
  justify-content: space-between;
  padding-left: 29px;
`

const Chart = styled.div`
  width: 299px;
  height: 85px;
  display: flex;
`

const ChartValues = styled.div`
 display: flex;
  justify-content: space-between;
  margin-top: 41px;
  padding: 29px 29px 118px 29px;
`

const ChartValue = styled.div`
 display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  letter-spacing: 0.02em;

  color: #101010;
`

const PositiveNumber = styled.span`
    color: #4CFFD7
`

const NegativeNumber = styled.span`
    color: #EA9A9B
`

const LastNewsBlock = styled.div`
 max-width: 396px;
  border-left: 1px solid #DADADA;
`

const NewsBox = styled.div`
  padding: 30px 0 30px 30px;
  width: 100%;
  position: relative;
  &:after{
    position: absolute;
    content: '';  
    width: 205%;
    background: #DADADA;
    height: 1px;
    top: 0;
    left: -1px;
    &:first-child{
      height: 0;
    }
  }
`

const NewsText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  max-width: 370px;
  color: #000000;
`

//кнока подробнее и дата новости в одном блоке
const ViewMoreAndData = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #045599;
  margin-top: 13px;
`

const ViewMore = styled.button`
  border-style: none;
  color: #045599;
  background: transparent ;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
`

const Premarket : FC = () => {
    const data = [
        {
            name: 'Page A',
            uv: 22000,
            pv: 2400,
            amt: 2400,
        },
    ];
    return (
        <Wrapper>
        <PreMarket>
            <PreMarketHeader>
                <PrmHeaderTitle>
                    U.S PRE MARKET. MARKET OPENS IN 2H 6M
                </PrmHeaderTitle>
                <HeaderBtns>
                    <HeaderBtn>U.S</HeaderBtn>
                    <HeaderBtn>MAJOR INDEX</HeaderBtn>
                </HeaderBtns>
            </PreMarketHeader>
            <CompositeIndexBlock>
                <CompositeIndexBox>
                    <IndexText>NASDAQ Composite Index</IndexText>
                    <IndexText>13 768.92 <NegativeNumber>-385.10</NegativeNumber> -2.72%</IndexText>
                    <IndexText>Volume:5,746,186,301</IndexText>
                </CompositeIndexBox>
                <CompositeIndexBox>
                    <IndexText>NASDAQ Composite Index</IndexText>
                    <IndexText>13 768.92  <NegativeNumber>-385.10</NegativeNumber> -2.72%</IndexText>
                    <IndexText>Volume:5,746,186,301</IndexText>
                </CompositeIndexBox>
            </CompositeIndexBlock>
      <ChartBlock>
          <Chart>
              <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
              </ResponsiveContainer>
          </Chart>
          <Chart>
              <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
              </ResponsiveContainer>
          </Chart>
      </ChartBlock>
            <ChartValues>
                <ChartValue>
                    <span>NASDAQ-100</span>
                    <span style={{margin: '15px 0'}}>14438.4</span>
                    <NegativeNumber>-408.06 -2.75%</NegativeNumber>
                </ChartValue>
                <ChartValue>
                    <span>NASDAQ-100</span>
                    <span style={{margin: '15px 0'}}>14438.4</span>
                    <NegativeNumber>-408.06 -2.75%</NegativeNumber>
                </ChartValue>
                <ChartValue>
                    <span>NASDAQ-100</span>
                   <span style={{margin: '15px 0'}}>14438.4</span>
                    <PositiveNumber>-408.06 -2.75%</PositiveNumber>
                </ChartValue>
                <ChartValue>
                    <span>NASDAQ-100</span>
                   <span style={{margin: '15px 0'}}>14438.4</span>
                    <PositiveNumber>-408.06 -2.75%</PositiveNumber>
                </ChartValue>

            </ChartValues>
        </PreMarket>
        <LastNewsBlock>
            <NewsBox>
                <NewsText>
                    Astana International Exchange и Euroclear Bank запускают сервис по расширенным расчетам
                </NewsText>
                <ViewMoreAndData>
                 <span>21 января</span>
                    <ViewMore>Подробнее <img src={Vector} alt=""/></ViewMore>
                </ViewMoreAndData>
            </NewsBox>
            <NewsBox>
                <NewsText>
                    Astana International Exchange и Euroclear Bank запускают сервис по расширенным расчетам
                </NewsText>
                <ViewMoreAndData>
                    <span>21 января</span>
                    <ViewMore>Подробнее <img src={Vector} alt=""/></ViewMore>
                </ViewMoreAndData>
            </NewsBox>
            <NewsBox>
                <NewsText>
                    Astana International Exchange и Euroclear Bank запускают сервис по расширенным расчетам
                </NewsText>
                <ViewMoreAndData>
                    <span>21 января</span>
                    <ViewMore>Подробнее <img src={Vector} alt=""/></ViewMore>
                </ViewMoreAndData>
            </NewsBox>
        </LastNewsBlock>
        </Wrapper>
    );
};

export default Premarket;

