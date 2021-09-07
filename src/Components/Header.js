import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleWrapper = styled.section `
  align-items: center;
  background-color: #1181B2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  img {
    display: inline;
    max-width: 7em;
    padding: 15px 0 0 15px;
    width: 100%;
    
    @media(max-width: 500px){
      width: 5em;
    }
  }
`;

const Title = styled.div `
  color: #DDEDF4;
  font-size: 1.5em;
  font-family: 'Lilita One', cursive;
`;

const Search = styled.div `
margin: 3em;
background-color: #fff;
border: 1px solid #dfe1e5;
border-radius: 15px;
display: flex;  

input {
  border: none;
  margin: 0.3em;
  outline: none;
}
`
const Icon = styled.span `
  align-content: center;
  margin: 3px 0 0 5px;
`

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    let newCity = document.getElementById('city').value;
    let formattedCity = newCity[0].toUpperCase() + newCity.slice(1).toLowerCase();
    window.location.href = '/details/' + formattedCity;
  }
  return(
    <TitleWrapper>
        <Link to='/'>
          <img alt='Weather logo' src='https://res.cloudinary.com/dkjaz9pdx/image/upload/v1628439274/samples/newLogo_kadqqg.png' />
          <Title>Weather App</Title>
        </Link>
      
      <Search>
        <form onSubmit={handleClick}>
          <Icon><i className="fas fa-search"></i></Icon>
          <input type='input'  results='5' name='city' id='city'  placeholder='Search location' />   
        </form>      
      </Search>
    </TitleWrapper>
  )
};

export default Header;
