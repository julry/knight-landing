import styled from 'styled-components';
import bricks from '../assets/images/bricks.svg';
import shield from '../assets/images/shield.svg';
import { useScreen } from '../hooks/useScreen';
import { FullHeightScreen } from './shared/FullHeightScreen';
import { Title } from './shared/Title';
import { Text } from './shared/Text';
import { Button } from './shared/Button';

const BricksWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${bricks}) no-repeat center;
  background-size: contain;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: min(75px, 20vw);
`;

const ShieldWrapper = styled.div`
  background: url(${shield}) no-repeat center;
  background-size: contain;
  width: 92.26vw;
  height: 50.4vw;
  max-width: 400px;
  max-height: 218px;
`;

const Description = styled.div`
  margin: min(50px, 13vw) auto min(30px, 8vw);
  max-width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #F5D3A6;
`;

const TitleStyled = styled(Title)`
  font-size: 35px;
  margin-bottom: 20px;
`;

export const Screen1 = () => {
    const {next} = useScreen();

    return (
        <FullHeightScreen>
            <BricksWrapper/>
            <Content>
                <ShieldWrapper/>
                <Description>
                    <TitleStyled>Правильный выбор!</TitleStyled>
                    <Text>
                        {
                            'Для вступления в члены общества\nнеобходимо ' +
                            'проявить силу\nи настойчивость, как однажды ' +
                            '\nэто сделал король Артур.'
                        }
                    </Text>
                </Description>
                <Button onClick={next}>К первому испытанию!</Button>
            </Content>
        </FullHeightScreen>
    );
};
