import styled from "styled-components";

const TitleWrapper = styled.section `
  align-items: center;
  background-color: #1181B2;
  display: flex;
  img {
    @media(max-width: 500px){
      width: 5em;
  };
  justify-content: flex-start;
  margin-bottom: 30px;
  max-width: 7em;
  padding: 15px 0 0 15px;
  width: 100%;
`;

const Title = styled.h1 `
  color: #DDEDF4;
  font-size: 1.5em;
  font-family: 'Lilita One', cursive;
  text-align: center;
`;

const Header = () => {
  return(
    <TitleWrapper>                 
      <img alt='Weather logo' src='https://raw.githubusercontent.com/NicolasArayaB/ria-weather-app/main/public/newLogo.png?token=APDPRH6F2Q6QRJGGEOBLR6TBB5NVO' />
      <Title>Weather App</Title>
    </TitleWrapper>
  )
};

export default Header;
