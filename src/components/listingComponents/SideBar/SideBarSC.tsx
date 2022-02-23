import { Link } from "react-router-dom";
import styled from "styled-components";


export const SideBarWrap = styled.div`
    padding: 0px 40px 0 0;
`

export const SideBarTitle = styled.h3`
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #101010;
    margin: 0 0 36px 0;
`

export const SideBarLink = styled.button`
    background: none;
    border: none;
    padding: 0;
    text-decoration: none;
    font-family: Exo 2;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #101010;
    cursor: pointer;
    text-align: start;
    margin: 20px 0;
`

export const SideBarLinkActive = styled(SideBarLink)`
    color: #045599;
`