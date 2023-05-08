import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import QRCodeStyling from 'qr-code-styling';
import { Title } from './shared/Title';
import { Text } from './shared/Text';
import background from '../assets/images/qrBg.svg';
import table from '../assets/images/table.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20vh 80px 2vh;
  color: #F5D3A6;
  text-align: left;
  background: url(${background}) no-repeat 0 0;
  background-size: cover;

  @media screen and (max-height: 695px) {
    padding-top: 14vh;
    background-size: contain;
    background-position: center;
  }
`;

const TitleStyled = styled(Title)`
  font-size: 65px;

  @media screen and (max-height: 700px) {
    font-size: 55px;
  }

  @media screen and (max-height: 550px) {
    font-size: 40px;
  }
`;

const TextStyled = styled(Text)`
  font-size: 25px;
  margin: 30px 0;
`;

const Image = styled.div`
  background: url(${table}) no-repeat 0 100%;
  background-size: cover;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const QrScreen = () => {
    const $qrRef = useRef();

    useEffect(() => {
        if (!$qrRef?.current?.children.length) {
            const qrCode = new QRCodeStyling({
                width: 200,
                height: 200,
                type: 'svg',
                backgroundOptions: {
                    color: 'transparent',
                },
                dotsOptions: {
                    type: 'rounded',
                    color: '#F5D3A6',
                },
                cornersSquareOptions: {
                    type: 'extra-rounded',
                },
                cornersDotOptions: {
                    type: 'extra-rounded',
                },
                data: window.location.href
            });
            qrCode.append($qrRef.current);
        }
    }, []);

    return (
        <Wrapper>
            <Content>
                <TitleStyled>
                    {'Круглые столы — древняя\nтрадиция, но технологии\nна месте не стоят'}
                </TitleStyled>
                <TextStyled>
                    {'Сканируй QR-код или копируй '}
                    ссылку,
                    {'\nчтобы вступить в закрытое общество!'}
                </TextStyled>
                <div ref={$qrRef}/>
            </Content>
            <Image/>
        </Wrapper>
    );
};