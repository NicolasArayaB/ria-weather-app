import styled from "styled-components";

export const TableWrapper = styled.div `
flex-direction: column;
background-color: #1181B2;
color: #DDEDF4;
padding: 0 2em 2em;
margin: 1.5em 1em;
box-shadow: 5px 10px 8px #888888;
border-radius: 20px;
justify-content: center;
height: fit-content;
text-align: center;
max-width: 90%;

table {
  border-collapse: collapse;
}

td, th {
  padding: 2em;
}

@media(max-width: 800px){
  font-size: 0.3em
  table {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    max-width: 80%;
  }
  td, th {
    padding: 0.3em;
  }
  img {
    width: 4em;
  }
  p {
    margin: 0 0 0.6em;
  }
}

td:first-child, th:first-child {
  border-radius: 20px 0 0 20px;
}

td:last-child, th:last-child {
  border-radius: 0 20px 20px 0;
}

tr:nth-child(even), thead tr {
  background-color: #fff;
  border-radius: 20px;
  color: #1181B2;
}
`