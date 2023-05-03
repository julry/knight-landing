import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GameScreen } from './shared/GameScreen';
import progressBg from '../assets/images/gameProgressBg.svg';
import elementBg from '../assets/images/gameProgressElement.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: blur(${({isBlurred}) => isBlurred ? '10px' : 0});
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Element = styled.div`
  position: absolute;
  top: -2px;
  left: ${({left}) => left + 'px'};
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

const FINAL_COUNT = 5;

export const SwordScreen = () => {
    const [isFinished, setIsFinished] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const [position, setPosition] = useState(0);
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);

    const $progressRef = useRef(null);
    const $elementRef = useRef(null);

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

    useEffect(() => {
        if ($progressRef?.current && $elementRef?.current) {
            const position = (14 / 319) * $progressRef.current.clientWidth;
            setStep(($progressRef.current.clientWidth - (2 * position) - $elementRef?.current.clientWidth) / 6);
            setPosition(position);
        }
    }, [$progressRef?.current, $elementRef?.current]);

    const onClick = () => {
        if (count > FINAL_COUNT) return;
        setCount(prevCount => ++prevCount);
        setPosition(prevPos => prevPos + step);
    }

    useEffect(() => {
        if (count > FINAL_COUNT) {
            setTimeout(() => {
                setIsFinished(true);
            }, 250);
        }
    }, [count])

    return (
        <GameScreen
            isFinished={isFinished}
            initialState={initialState}
            finalState={finalState}
            onChangeState={handleChangeState}
        >
            <Wrapper isBlurred={isBlurred} onClick={onClick}>
                <Progress ref={$progressRef}>
                    <Element ref={$elementRef} left={position}/>
                </Progress>
            </Wrapper>
        </GameScreen>
    )
}