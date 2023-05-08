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

const QrCode = styled.div`
  position: relative;
`;

const QrSvg = styled.svg`
  position: absolute;
  top: 13px;
  left: 12px;
  width: 175px;
  height: 175px;
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
                    color: 'transparent',
                },
                cornersDotOptions: {
                    type: 'extra-rounded',
                    color: 'transparent',
                },
                imageOptions: {
                    margin: 5,
                    imageSize: 0.5
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
                <QrCode>
                    <div ref={$qrRef}/>
                    <QrSvg width="156" height="156" viewBox="0 0 156 156" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.6522 37H12.7726C5.96029 37 0.421136 31.395 0.421136 24.5095L0.413818 0.413784H24.6522C31.4609 0.413784 37 6.01879 37 12.9043V24.5095V37H24.6522ZM31.5121 12.9043C31.5121 9.04301 28.4348 5.90172 24.6522 5.90172H5.90321L5.90907 24.5076C5.90907 28.3708 8.98816 31.5121 12.7726 31.5121H31.5121V12.9043Z"
                            fill="#F5D3A6"/>
                        <path
                            d="M143.238 0.413788H131.359C124.546 0.413788 119.007 6.0188 119.007 12.9043L119 37H143.238C150.047 37 155.586 31.395 155.586 24.5095V12.9043V0.413788H143.238ZM150.098 24.5095C150.098 28.3708 147.021 31.5121 143.238 31.5121H124.489L124.495 12.9062C124.495 9.04301 127.574 5.90172 131.359 5.90172H150.098V24.5095Z"
                            fill="#F5D3A6"/>
                        <path
                            d="M24.6522 119H12.7726C5.96029 119 0.421136 124.605 0.421136 131.491L0.413818 155.586H24.6522C31.4609 155.586 37 149.981 37 143.096V131.491V119H24.6522ZM31.5121 143.096C31.5121 146.957 28.4348 150.098 24.6522 150.098H5.90321L5.90907 131.492C5.90907 127.629 8.98816 124.488 12.7726 124.488H31.5121V143.096Z"
                            fill="#F5D3A6"/>
                        <path
                            d="M22.2732 26.5501H15.1366C14.7696 26.5501 14.4135 26.5035 14.075 26.4129C13.3255 26.2159 12.6574 25.818 12.1277 25.2783C12.031 25.1809 11.9386 25.077 11.853 24.971C11.2441 24.2235 10.8793 23.2614 10.8793 22.2174L10.8749 10.8703H22.2732C24.6206 10.8703 26.5283 12.8141 26.5283 15.2026V22.2152V22.2174L26.5547 26.5477C26.5547 26.5477 23.7413 26.5501 22.2732 26.5501Z"
                            fill="#F5D3A6"/>
                        <path
                            d="M140.859 10.8637H133.723C133.356 10.8637 133 10.9103 132.661 11.0009C131.912 11.1978 131.244 11.5958 130.714 12.1355C130.617 12.2329 130.525 12.3368 130.439 12.4428C129.83 13.1903 129.465 14.1524 129.465 15.1964L129.461 26.5435H140.859C143.207 26.5435 145.115 24.5997 145.115 22.2112V15.1985V15.1964L145.141 10.8661C145.141 10.8661 142.327 10.8637 140.859 10.8637Z"
                            fill="#F5D3A6"/>
                        <path
                            d="M22.2731 129.45H15.1366C14.7695 129.45 14.4134 129.497 14.0749 129.587C13.3254 129.784 12.6573 130.182 12.1276 130.722C12.0309 130.819 11.9385 130.923 11.8529 131.029C11.2441 131.777 10.8792 132.739 10.8792 133.783L10.8748 145.13H22.2731C24.6205 145.13 26.5283 143.186 26.5283 140.797V133.785V133.783L26.5546 129.452C26.5546 129.452 23.7412 129.45 22.2731 129.45Z"
                            fill="#F5D3A6"/>
                    </QrSvg>
                </QrCode>
            </Content>
            <Image/>
        </Wrapper>
    );
};