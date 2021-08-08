import styled from "styled-components";

export const InfoCard = styled.div`
width: 20%;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
color: #1181B2;
img {
  padding: 1em;
  width: 4em;
}

h4 {
  color: #DDEDF4;
}

@media(max-width:800px){
 height: fit-content;
 padding-bottom: 0.3em;
 aling-items: end;
}
`
export const Info = styled.div `
justify-content: space-around;
width: 55em;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items:center;
padding: 0 3em 3em 3em;
justify-content: space-between;

@media (max-width: 800px) {
  margin: 0 2em;
  padding: 0 1.2em 1.2em;
  width: 25em;
}
`