import React from 'react';
import styled from "styled-components";
import { LCTitle } from '../../components/listingComponents/ListingC/Listing';
import {LeftSideText1, LeftSideText2} from '../../pages/home/NoNameBlock'
import {ActionBtn} from "../home/Trends";
import {ViewMore} from "../home/premarket";
import { Container, Flex } from '../../uikit/uikit';

const ReadMore = styled.div`
  margin: 20px 0 45px 45px;
`


const Clearing = () => {
    return (
        <Container>
            <LCTitle>Клиринг и Депозитарий</LCTitle>
          <Flex direction={'column'}>
              <LeftSideText2 margin={'56px 0 0 0'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem dolores earum eius eos nihil officiis sequi tempora vel voluptas. Ad adipisci consectetur consequuntur cupiditate dolor doloribus, ducimus eius, ex explicabo fuga harum inventore labore laborum magnam magni nam nisi odit omnis porro qui quo quod repellendus reprehenderit sint sit veniam voluptas voluptatibus. Accusamus at magnam mollitia non numquam voluptatem voluptatibus! Animi, distinctio illum laborum nobis non quae quam quas. A alias aliquid asperiores at aut dolore ea earum eius eum ex facilis id incidunt labore molestiae natus optio perferendis possimus quam quis quisquam, quo, sapiente soluta veniam. Cupiditate, vitae.</LeftSideText2>
              <ReadMore><ViewMore>Читать дальше</ViewMore></ReadMore>
          </Flex>
        </Container>
    );
};

export default Clearing