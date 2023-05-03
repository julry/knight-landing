import styled from 'styled-components';
import { Title } from './Title';
import { Button } from './Button';
import buttonBg from '../../assets/images/buttonModal.svg';
import bg from '../../assets/images/modalBg.svg';

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(24, 35, 38, 0.6);
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88.8vw;
  height: 62.933vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: min(13vw, 50px) 0;
  background: url(${bg}) no-repeat center;
  background-size: contain;
  z-index: 100001;
`;

const TextStyled = styled(Title)`
  color: #513C3E;
  font-size: 19px;
  line-height: 120%;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
`;

const ButtonStyled = styled(Button)`
  background-image: url(${buttonBg});
  width: 140px;
  padding: 12px 0;
  color: #513C3E;
`;

export const Modal = ({text, btnText, onClick}) => {
    return (
        <>
            <Backdrop />
            <ModalWrapper>
                <TextStyled>{text}</TextStyled>
                <ButtonStyled onClick={onClick}>{btnText}</ButtonStyled>
            </ModalWrapper>
        </>
    )
}