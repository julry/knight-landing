import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import background from '../assets/images/backgroundIntro.png';
import scroll from '../assets/images/scrollIntro.svg';
import paper from '../assets/images/paperIntro.svg';
import btnBg from '../assets/images/buttonLBgLight.svg';
import finger from '../assets/images/fingerDown.svg';
import { Button } from './shared/Button';
import { useScreen } from '../hooks/useScreen';
import { Title } from './shared/Title';
import { ItalicText, Text } from './shared/Text';
import { useEffect, useState } from 'react';
import { Modal } from './shared/Modal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 58px;
  filter: ${({isBlurred}) => isBlurred ? 'blur(10px) ' : 'unset'}
`;

const Logo = styled.div`
  margin: 0 auto 40px;
  width: 159px;
  height: 48px;
  background: url(${logo}) no-repeat center;
`;

const InfoWrapper = styled.div`
  padding: 36px 0 40px;
  background-color: #F5D3A6;
`;

const TitleStyled = styled(Title)`
  font-size: 60px;
  line-height: 80%;

  @media screen and (max-width: 350px) {
    font-size: 48px;
  }
`;

const TextStyled = styled(Text)`
  margin: 0 auto;
  max-width: 266px;
`;

const BackgroundWrapper = styled.div`
  margin-top: -1px;
  width: 100%;
  height: 562px;
  background: url(${background}) no-repeat -446px 0;
  background-size: cover;

  @media screen and (max-width: 350px) {
    height: 530px;
  }

  @media screen and (min-width: 625px) {
    background-position-x: -5vw;
  }

  @media screen and (min-width: 935px) {
    height: 720px;
  }
`;

const ScrollWrapper = styled.div`
  margin: 111px auto 89px;
  background: url(${scroll}) no-repeat center;
  background-size: cover;
  padding: 127px 0 87px;
  width: calc(100% - 36px);
  max-width: 339px;
`;

const ScrollText = styled(Text)`
  max-width: 206px;
  margin: 0 auto;
`;

const PaperWrapper = styled.div`
  background: url(${paper}) no-repeat center 0;
  background-size: cover;
  padding: 110px 0 100px;
  width: 100%;
  min-height: min(89vh, 160.8vw);
`;

const Question = styled(Title)`
  font-size: 35px;
  max-width: 328px;
  margin: 0 auto;

  @media screen and (max-width: 350px) {
    font-size: 28px;
    max-width: 310px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;

const ButtonStyled = styled(Button)`
  margin-bottom: 20px;
  background-image: url(${btnBg});
`;

const FingerIcon = styled.div`
  background: url(${finger}) no-repeat center;
  margin: 20px auto 10px;
  width: 13px;
  height: 19px;
`;


export const Intro = () => {
    const [isModal, setIsModal] = useState(false);
    const {next} = useScreen();

    useEffect(() => {
        if (isModal) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const handleScroll = () => {
                window.scrollTo(0, scrollTop);
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isModal]);

    return (
        <>
            <Wrapper isBlurred={isModal}>
                <InfoWrapper>
                    <Logo/>
                    <TitleStyled>Здравствуй,{'\n'}странник!</TitleStyled>
                </InfoWrapper>
                <BackgroundWrapper>
                    <TextStyled>
                        {
                            'Сотни веков люди ищут магические артефакты. Одни даруют вечную жизнь, ' +
                            'другие — управляют судьбой, третьи — указывают дорогу ' +
                            'к несметным богатствам.\n\n' +
                            'А мы ищем то, что хранит тайные знания о привлечении ' +
                            'лучших специалистов в компании.'
                        }
                    </TextStyled>
                    <FingerIcon/>
                    <ItalicText>Листай вниз</ItalicText>
                </BackgroundWrapper>
                <ScrollWrapper>
                    <ScrollText>
                        {
                            'Поиски волшебного артефакта — это долгий и сложный путь. ' +
                            'Пройти его в одиночку и без должной подготовки практически невозможно. ' +
                            'Чтобы достичь успеха мы обратимся к давней традиции рыцарей, искавших Святой Грааль.' +
                            '\n\n' +
                            'Рыцари собирались\nза Круглым столом, чтобы обсудить поиски священного артефакта. ' +
                            'Первым организатором был король Артур. Но это был лишь миф.' +
                            '\n\n' +
                            'В XIV веке король Эдуард III создал в Виндзорском замке первый настоящий ' +
                            'Круглый стол: были приглашены представители элиты\nи устроен большой пир'
                        }
                    </ScrollText>
                </ScrollWrapper>
                <PaperWrapper>
                    <Question>
                        {
                            'В наше время самые известные Круглые столы ' +
                            'проводятся в Винчестере и на Экономическом факультете МГУ.\n' +
                            'Куда направишься ты?'
                        }
                    </Question>
                    <ButtonWrapper>
                        <ButtonStyled onClick={() => setIsModal(true)}>Винчестер, Англия</ButtonStyled>
                        <Button onClick={next}>ЭФ МГУ, Москва</Button>
                    </ButtonWrapper>
                </PaperWrapper>
            </Wrapper>
            {isModal && (
                <Modal
                    onClose={() => setIsModal(false)}
                    text={
                        'Забавно получилось — \nв Англию из этой игры\nпопасть нельзя.\n' +
                        'Попробуй другую кнопку'
                    }
                />
            )}
        </>
    );
};
