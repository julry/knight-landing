import styled from 'styled-components';
import background from '../../assets/images/buttonLBg.svg';

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  width: 299px;
  font-family: 'Times New Roman', serif;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  padding: 24px 0;
  background: url(${background}) no-repeat center;
  background-size: contain;
  color: #374A4B;
  
  @media screen and (max-width: 310px) {
    width: 260px;
  }
`;

export const Button = (props) => (
    <ButtonStyled {...props}>{props.children}</ButtonStyled>
);
