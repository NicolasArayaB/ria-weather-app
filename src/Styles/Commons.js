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
    margin: 2px;
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
  font-size: 2em;
  margin: 25px 0;
  
  @media(max-width: 800px){
    font-size: 1.6em;
    margin: 10px;
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
  margin: 0 2em 2em 2em;
  padding: 0;
  width: 25em;
}
`
export const Heading = styled.div`
color: #666;
font-size: 1.4em;
margin: 0.5em;

@media(max-width: 800px){
  vertical-align: text-bottom;
  font-size: 1.2em;
  margin: 10px 0 0 0;
}

`

export const InfoCard = styled.div`
width: 20%;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

height: 140px;
img {
  width: 6em;
}

@media(max-width:800px){
 height: 125px;
 padding-bottom: 1em;
 aling-items: end;
 img {
   width: 4em;
 }
}
`
