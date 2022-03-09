import React, {FC} from 'react';
import styled from "styled-components";
import {Flex} from "../../uikit/uikit";
// @ts-ignore
import listStyle from '../../assets/listItemStyle.svg'
// @ts-ignore
import morgan from '../../assets/jpmorgan.svg'
// @ts-ignore
import databank from '../../assets/databank2.svg'
// @ts-ignore
import ing from '../../assets/ing2).svg'
// @ts-ignore
import muzino from '../../assets/mizuno.svg'
// @ts-ignore
import natixis from '../../assets/natixis2.svg'
// @ts-ignore
import novikom from '../../assets/novicombank).svg'
import {ActionBtn} from "./Trends";

const Wrapper = styled.div`
width: 100%;
  border-bottom: 1px solid #DADADA;
`

const Container = styled.div`
 width: 1200px;
  margin: 0 auto;;
`

type Props = {
    margin?: string | '0';
    padding?: string | '0';
    width?: string | '0';
    height?: string | '0';
    fontSize?: string | '0';
    lineHeight?: string | '0';

};

 export const Title = styled.div <Props>`
  max-width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  background: #4478BB;
  font-style: normal;
  font-weight: normal;
  font-size:${(props) => props.fontSize} ;
  line-height: ${(props) => props.lineHeight};
  text-transform: uppercase;
  color: #FFFFFF;
`

const TitleText = styled.p`
 max-width: 505px;
`

 export  const LeftSideText1 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #101010;
  max-width: 567px;
  margin: 30px 0;
  padding: 0 0 0 30px;
`


export const LeftSideText2 = styled.div<Props>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #101010;
  max-width: 567px;
  padding: 0 0 0 45px;
  position: relative;
  margin: ${(props) => props.margin};
  &:before{
    position: absolute;
    content: '';
    width: 3px;
    height: 100%;
    background: #F47F1F;
    left: 30px;
  }
`

const List = styled.ul`
    margin-top: 30px;
    margin-left: 48px;
`

const ListItem = styled.li`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  max-width: 515px;
  text-decoration: none;
  color: #101010;
  list-style: none;
  position: relative;
  margin-bottom: 18px;
  &:before{
    position: absolute;
    content:'';
    background: url(${listStyle});
    width: 16px;
    height: 12px;
    left: -36px;
    top: 6px;
  }
`



const Logos1 = styled.div`
 display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 71px;
  margin-bottom: 30px;
`

const Logos2 = styled.img` 
 margin-bottom:32px;
`

const FlexBlock = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 1200px){
    display: flex;
    flex-direction: column;
  }
`

const NoNameBlock:FC = () => {
    return (
        <>


           <Wrapper>
               <Container>
                   <Title lineHeight={'48px'} fontSize={'40px'} width={'600px'} padding={'25px 65px 25px 30px'}>
                       <TitleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ac morbi</TitleText>
                   </Title>
               </Container>
        </Wrapper>
<Container>
               <FlexBlock>
                   <Flex direction={"column"}>
                       <LeftSideText1>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum, nunc posuere elit. Turpis a egestas velit velit at. Sed et turpis ipsum ultrices at donec vulputate. Ante eu purus id ac risus nisi, eu amet. Nibh vestibulum viverra gravida ut faucibus suspendisse nunc sapien, ac. Elementum augue non nec urna, et, sit porta. In sit sit tempus erat ac.</LeftSideText1>
                       <LeftSideText2>Dictum ac eget egestas ut lectus nisi integer. Blandit turpis massa facilisis dignissim risus massa vitae interdum. Tempus massa dui et velit elit fames interdum purus. <br/>
                           Enim sed nec vestibulum sollicitudin amet pretium, ornare lorem malesuada. Turpis senectus arcu mi volutpat morbi dolor. Viverra duis facilisis nisl, scelerisque. Nec nam hendrerit ornare enim lorem mauris. Tellus mus massa quam dignissim vestibulum purus. Quis nibh interdum morbi tempus morbi ornare elit. Lobortis.</LeftSideText2>
                   <ActionBtn margin={'40px 0 0 30px'}>Призыв к дейстивию</ActionBtn>
                   </Flex>
                   <Flex direction={"column"}>
                    <List>
                        <ListItem>Lectus elementum, nunc posuere elit.</ListItem>
                        <ListItem>Turpis a egestas velit velit at nec urna, et, sit porta. In sit sit </ListItem>
                        <ListItem>Ante eu purus id ac risus nisi, eu amet. Nibh vestibulum viverra gravida ut faucibus suspendisse nunc sapien, ac. </ListItem>
                    </List>
                       <Flex align={"center"}>
                           <Logos1>
                               <Logos2 src={morgan} alt=""/>
                               <img src={muzino} alt=""/>
                           </Logos1>
                           <Logos1>
                               <Logos2 src={databank} alt=""/>
                               <img src={natixis} alt=""/>
                           </Logos1>

                           <Logos1>
                               <Logos2 src={ing} alt=""/>
                               <img src={novikom} alt=""/>
                           </Logos1>
                       </Flex>
                   </Flex>
               </FlexBlock>
</Container>
        </>
    );
};

export default NoNameBlock;