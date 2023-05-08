import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GameScreen } from '../shared/GameScreen';
import progressBg from '../../assets/images/gameProgressBg.svg';
import elementBg from '../../assets/images/gameProgressElement.svg';
import background from '../../assets/images/swordGameBg.png';
import { SwordRock } from './SwordRock';
import { FINAL_COUNT } from './sword-screen-constants';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: blur(${({isBlurred}) => isBlurred ? '10px' : 0});
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${background}) center no-repeat;
  background-size: cover;
`;

const Progress = styled.div`
  position: relative;
  margin-top: min(9vw, 34px);
  height: 35px;
  width: 319px;
  background: url(${progressBg}) no-repeat center;
  background-size: contain;
  
  @media screen and (max-width: 320px) {
    width: 250px;
  }

  @media screen and (min-width: 640px) {
    width: 400px;
    height: 50px;
  }
`;

const SwordRockStyled = styled(SwordRock)`
  margin-top: auto;
`;

const Element = styled.div`
  --position: calc((14 / 319) * 100%);
  --step: calc((100% - (2 * var(--position)) - 25px) / 6);

  position: absolute;
  top: -2px;
  left: calc(var(--position) + ${({count}) => count}*var(--step));
  width: 25px;
  height: 36px;
  background: url(${elementBg}) center no-repeat;
  transition: left 20ms ease-in;

  @media screen and (max-width: 320px) {
    width: 20px;
  }

  @media screen and (min-width: 640px) {
    width: 30px;
    height: 45px;
  }
`;

export const SwordScreen = () => {
    const [isFinished, setIsFinished] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);
    const [count, setCount] = useState(0);

    const initialState = {
        text: 'Кликай по камню,\nчтобы расколоть его\nи вытащить меч',
        btnText: 'Начать'
    };
    const finalState = {
        text: 'Победа! Посвящение в рыцари\n— великое событие в жизни\nкаждого человека. Осталась\nлишь пара формальностей',
        btnText: 'Вступить'
    };

    const handleChangeState = () => {
        setIsBlurred(blurred => !blurred);
    };

    const getStage = useCallback(() => Math.floor(count / 2), [count]);

    const onClick = () => {
        if (count >= FINAL_COUNT) return;
        setCount(prevCount => ++prevCount);
    }

    useEffect(() => {
        if (count >= FINAL_COUNT) {
            setTimeout(() => {
                setIsBlurred(true);
                setIsFinished(true);
            }, 650);
        }
    }, [count]);

    return (
        <GameScreen
            isFinished={isFinished}
            initialState={initialState}
            finalState={finalState}
            onChangeState={handleChangeState}
        >
            <Wrapper isBlurred={isBlurred}>
                <Progress>
                    <Element count={count}/>
                </Progress>
                <SwordRockStyled onClick={onClick} stage={getStage()}/>
            </Wrapper>
        </GameScreen>
    )
}