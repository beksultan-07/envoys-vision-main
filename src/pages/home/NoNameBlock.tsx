import React, {FC} from 'react';
import styled from "styled-components";
import {Flex} from "../../uikit/uikit";
import listStyle from '../../assets/listItemStyle.svg'
import morgan from '../../assets/morgan.svg'
import databank from '../../assets/dattabanksvg.svg'
import ing from '../../assets/ing.svg'
import muzino from '../../assets/muzuno.svg'
import natixis from '../../assets/natixis.svg'
import novikom from '../../assets/novicom.svg'

const Wrapper = styled.div`
width: 100%;
  border-bottom: 1px solid #DADADA;
`

const Container = styled.div`
 width: 1200px;
  margin: 0 auto;;
`

const Title = styled.div`
  max-width: 600px;
  padding: 25px 65px 25px 30px;
  background: #4478BB;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  color: #FFFFFF;
`

const TitleText = styled.p`
 max-width: 505px;
`

const LeftSideText1 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #101010;
  max-width: 567px;
  margin: 30px 0;
  padding: 0 0 0 30px;
`

const LeftSideText2 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #101010;
  max-width: 567px;
  padding: 0 0 0 30px;
`

const List = styled.ul`
    margin-top: 30px;
`

const ListItem = styled.li`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  max-width: 515px;
  text-decoration-line: underline;
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

const Logos2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -23px;
`

const NoNameBlock:FC = () => {
    return (
        <>


           <Wrapper>
               <Container>
                   <Title>
                       <TitleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ac morbi</TitleText>
                   </Title>
               </Container>
        </Wrapper>
<Container>
               <Flex justify={"space-between"}>
                   <Flex direction={"column"}>
                       <LeftSideText1>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum, nunc posuere elit. Turpis a egestas velit velit at. Sed et turpis ipsum ultrices at donec vulputate. Ante eu purus id ac risus nisi, eu amet. Nibh vestibulum viverra gravida ut faucibus suspendisse nunc sapien, ac. Elementum augue non nec urna, et, sit porta. In sit sit tempus erat ac.</LeftSideText1>
                       <LeftSideText2>Dictum ac eget egestas ut lectus nisi integer. Blandit turpis massa facilisis dignissim risus massa vitae interdum. Tempus massa dui et velit elit fames interdum purus.
                           Enim sed nec vestibulum sollicitudin amet pretium, ornare lorem malesuada. Turpis senectus arcu mi volutpat morbi dolor. Viverra duis facilisis nisl, scelerisque. Nec nam hendrerit ornare enim lorem mauris. Tellus mus massa quam dignissim vestibulum purus. Quis nibh interdum morbi tempus morbi ornare elit. Lobortis.</LeftSideText2>
                   </Flex>
                   <Flex direction={"column"}>
                    <List>
                        <ListItem>Lectus elementum, nunc posuere elit.</ListItem>
                        <ListItem>Turpis a egestas velit velit at nec urna, et, sit porta. In sit sit </ListItem>
                        <ListItem>Ante eu purus id ac risus nisi, eu amet. Nibh vestibulum viverra gravida ut faucibus suspendisse nunc sapien, ac. </ListItem>
                    </List>
                       <Flex align={"center"}>
                           <Logos1>
                               <img src={morgan} alt=""/>
                               <img src={muzino} alt=""/>
                           </Logos1>
                           <Logos1>
                               <img src={databank} alt=""/>
                               <img src={natixis} alt=""/>
                           </Logos1>

                           <Logos1>
                               <img src={ing} alt=""/>
                               <img src={novikom} alt=""/>
                           </Logos1>
                       </Flex>
                   </Flex>
               </Flex>
</Container>
        </>
    );
};

export default NoNameBlock;