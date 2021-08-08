import React from 'react';
import { useParams } from "react-router-dom";

import styled from 'styled-components';

const Wrapper = styled.div `
  width: 80%;
  text-align: end;
  margin: 15px 0;

  a {
    color: ${(props)=> props.color}};
  }
  a:hover {
    color: ${(props)=> props.color === '#DDEDF4' ? '#CCFFFB' : '#4fb2db' } ;
  }
`

const Anchor = (props) => {
  const params = useParams();


  return(
    <Wrapper color={params.city ? '#1181B2' : '#DDEDF4' } >
      <a href={params.city ? '/' : `/details/${props.city}`}>{params.city ? 'Back' : 'More information'}</a>
    </Wrapper>
  )
}

export default Anchor;
