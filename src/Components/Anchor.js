import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div `
width: 80%;
text-align: end;
margin: 15px 0;
a {
  color: #666;
}
a:hover {
  color: #999;
}
`

const Anchor = (props) => {
  const params = useParams();

  return(
    <Wrapper>
      <a href={params.city ? '/' : `/details/${props.city}`}>{params.city ? 'Back' : 'More information'}</a>
    </Wrapper>
  )
}

export default Anchor;