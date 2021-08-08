import styled from "styled-components";

export  const Container = styled.div `
  align-items: center;
  background-color: ${(props)=> props.bgColor};
  border-radius: 20px;
  box-shadow: ${(props)=> props.shadow};
  display: flex;
  flex-direction: ${(props)=> props.dir};
  justify-content: center;
  padding: 0;
  margin: ${(props)=> props.margin};
  min-height: ${(props)=> props.minHeight};

  p {
    text-align: center;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  &:is(:last-child){
    margin-bottom: 10px;
    padding-bottom: 0px;
  }
`
export const Title = styled.div `
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  margin: 0.5em 0;
  color: #1181B2;
  
  @media(max-width: 800px){
    font-size: 2.5em;
    margin 0.5em 0 0;
  }
`

export const Heading = styled.div`
  color: #DDEDF4;
  font-size: 1.8em;
  margin: 0.5em;

  @media(max-width: 800px){
    vertical-align: text-bottom;
    font-size: 1.6em;
    margin: 10px 0 0 0;
  }
`
