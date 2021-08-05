import styled from "styled-components";

const TitleWrapper = styled.section`
  align-items: center;
  background-color: #99EEFF;
  display: flex;
  img {
    width: 7em;
    @media(max-width: 500px){
      width: 5em;
    }
  justify-content: flex-start;
  margin-bottom: 30px; 
  padding: 15px 0 0 15px;
  max-width: 7em;
  width: 100%;
`;

const Title = styled.h1`
color: #fff;
font-size: 1.5em;
font-family: 'Ubuntu', sans-serif;
text-align: center;
`;

const Header = () => {
  return(
    <TitleWrapper>
      <img alt='Weather logo' src='./logo.png' />
      <Title>Weather App</Title>
    </TitleWrapper>
  )
}

export default Header;
