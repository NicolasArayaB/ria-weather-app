import styled from "styled-components";

export const TableWrapper = styled.div `
  background-color: #1181B2;
  border-radius: 20px;
  box-shadow: 5px 10px 8px #888888;
  color: #DDEDF4;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  margin: 1.5em 1em;
  max-width: 90%;
  min-width: 57em;
  padding: 0 2em 2em;
  text-align: center;

  table {
    border-collapse: collapse;
  }

  td, th {
    padding: 2em;
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

  @media(max-width: 800px){
    font-size: 0.8em;
    min-width: fit-content;

    img {
      width: 4em;
    }

    table {
      margin: 0;
      padding: 0;
    }

    td, th {
      padding: 0.3em;
    }

    p {
      margin: 0 0 0.6em;
    }
  }
`;
