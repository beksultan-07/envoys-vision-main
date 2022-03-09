import React from 'react';
import styled from 'styled-components';

type Props = {
    display: "none"|"block"
}



const Button = styled.div<Props>`
    width: 100px;
  height: 100px;
  background: #000;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: ${(props) => props.display};
`

const GoUpButton = () => {

    return (
        <>
            {window.screenY ==0 ? <Button display={'block'}>h</Button> : <Button display={'none'} >h</Button>}
</>
    );
};

export default GoUpButton;