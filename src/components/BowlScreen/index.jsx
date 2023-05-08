import styled from 'styled-components';
import { BowlGame } from './BowlGame';
import { GameScreen } from '../shared/GameScreen';
import { useState } from 'react';
import bowl from '../../assets/images/bowl.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(${({isBlurred}) => isBlurred ? '10px' : 0});
`;

const BowlWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
  z-index: 20000000;
  width: 74px;
  height: 101px;
  background: url(${bowl}) no-repeat center;
`;

export const BowlScreen = () => {
    const [isFinished, setIsFinished] = useState(false);
    const [isBlurred, setIsBlurred] = useState(true);

    const initialState = {
        text: 'Найди среди сокровищ\nзолотую чашу и нажми\nна неё, чтобы забрать',
        btnText: 'На поиски'
    };
    const finalState = {
        text: 'Эта чаша похожа на Святой\nГрааль! Посмотри, в ней лежат\nкусочки послания. Собери их,\nчтобы узнать послание!',
        btnText: 'За дело!'
    };

    const handleChangeState = () => {
        setIsBlurred(blurred => !blurred);
    };

    const handleFindBowl = () => {
        setIsFinished(true);
        handleChangeState();
    };

    return (
        <GameScreen
            isFinished={isFinished}
            initialState={initialState}
            finalState={finalState}
            onChangeState={handleChangeState}
        >
            <Wrapper isBlurred={isBlurred}>
                <BowlGame onClick={handleFindBowl}/>
            </Wrapper>
            {isFinished && <BowlWrapper/>}
        </GameScreen>
    );
};