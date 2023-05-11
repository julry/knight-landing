import styled from 'styled-components';
import buttonBg from '../../assets/images/buttonModal.svg';
import bg from '../../assets/images/modalBg.svg';
import closeIcon from '../../assets/images/closeIcon.svg';
import { Title } from './Title';
import { Button } from './Button';

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88.8vw;
  height: 62.933vw;
  max-width: 500px;
  max-height: 300px;
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

  @media screen and (max-width: 325px) {
    font-size: 16px;
  }

  @media screen and (max-width: 310px) {
    line-height: 110%;
    margin-bottom: 10px;
  }
`;

const ButtonStyled = styled(Button)`
  background-image: url(${buttonBg});
  width: 140px;
  padding: 12px 0;
  color: #513C3E;
`;

const Content = styled.div`
    margin: auto;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 36px;
  right: 36px;
  background: url(${closeIcon}); 
  width: 16px;
  height: 16px;
`;

export const Modal = ({text, btnText, onClick, onClose}) => {
    return (
        <>
            <Backdrop onClick={onClose}/>
            <ModalWrapper>
                <Content>
                    {onClose && <CloseBtn onClick={onClose}/>}
                    <TextStyled>{text}</TextStyled>
                    {btnText && <ButtonStyled onClick={onClick}>{btnText}</ButtonStyled>}
                </Content>
            </ModalWrapper>
        </>
    );
};
