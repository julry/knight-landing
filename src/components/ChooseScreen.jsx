import styled from 'styled-components';
import { useEffect } from 'react';
import { Title } from './shared/Title';
import background from '../assets/images/chooseScreenImg.svg';
import { Button } from './shared/Button';
import { useScreen } from '../hooks/useScreen';
import { ItalicText } from './shared/Text';
import { FullHeightScreen } from './shared/FullHeightScreen';

const Wrapper = styled(FullHeightScreen)`
  padding-top: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 84px;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

const TitleStyled = styled(Title)`
  font-size: 35px;
  margin-bottom: 44px;
`;

const ButtonStyled = styled(Button)`
  margin-bottom: 20px;
`;

export const ChooseScreen = () => {
    const {next} = useScreen();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Wrapper>
            <Content>
                <TitleStyled>
                    {'Ты можешь\nостановиться тут\nили продолжить\nсвой путь.'}
                </TitleStyled>
                <ButtonStyled>Остановиться</ButtonStyled>
                <ButtonStyled onClick={next}>Продолжить путь</ButtonStyled>
                <ItalicText>{'*чтобы найти послание\nот организаторов Круглого стола'}</ItalicText>
            </Content>
        </Wrapper>
    );
};
