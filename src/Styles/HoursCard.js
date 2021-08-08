import styled from "styled-components";

export const InfoCard = styled.div`
  align-items: center;
  color: #1181B2;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 20%;

  img {
    padding: 1em;
    width: 4em;
  }

  h4 {
    color: #DDEDF4;
  }

  @media(max-width:800px){
   aling-items: end;
   height: fit-content;
   padding-bottom: 0.3em;

   p {
     font-size: 0.8em;
   }
  }
`;

export const Info = styled.div `
  align-items:center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3em 3em 3em;
  width: 55em;

  @media (max-width: 800px) {
    margin: 0 2em;
    padding: 0 1.2em 1.2em;
    width: 25em;
  }
`;
