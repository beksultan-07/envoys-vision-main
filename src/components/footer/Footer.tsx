import React from 'react';
import styled from "styled-components";

const FooterBlock = styled.footer`
 width: 100%;
  display: flex;
  justify-content: space-between;
`

const FooterItems = styled.div`
 width: 33.3%;
  padding: 40px 86px 100px 31px;
  border-right: 1px solid #DADADA;
  &:last-child{
    border-right: none;
  }
`

const Contacts = styled.div`
 display: flex; 
 flex-direction: column;
`

const Contact = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: #101010;
  width: 283px;
  &:last-child{
    text-transform: lowercase;
  }
`

const WorkDays = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #101010;
  margin-bottom: 50px;
`

const CompanyName = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #101010;
  margin: 20px 0 10px 0;
`

const PrivacyPolicy = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: #F47F1F;
`

const FooterNavHeading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
    letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #101010;
`

const NavItem = styled.li`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #101010;
  margin: 30px 0 20px 0;
  list-style: none;
`

const Container = styled.div`
 width: 1200px;
  margin: 0 auto;
  border-right: 1px solid #DADADA;
  border-left: 1px solid #DADADA;
  position: relative;
  &:before{
    position: absolute;
    content: '';
    background: #F47F1F;
    width: 100vw;
    height: 6px;
    top: 0;
    right: -368px;
  }
`


const Footer = () => {
  return (
      <Container>
      <FooterBlock>
        <FooterItems>
          <Contacts>
            <Contact>+996 (559) 18 00 33</Contact>
            <WorkDays>Пн-Пт 9.00-20.00</WorkDays>
            <Contact>info@evde.kg</Contact>
            <CompanyName>Envoys vision digital exchange 2022</CompanyName>
            <PrivacyPolicy>Политика конфиденциальности</PrivacyPolicy>
          </Contacts>
        </FooterItems>
        <FooterItems>
          <FooterNavHeading>Навигация по сайту</FooterNavHeading>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
        </FooterItems>
        <FooterItems>
          <FooterNavHeading>Навигация по сайту</FooterNavHeading>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
          <NavItem>Навигация по сайту</NavItem>
        </FooterItems>
      </FooterBlock>
      </Container>
  );
};

export default Footer;