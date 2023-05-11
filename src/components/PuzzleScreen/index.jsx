import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, DndProvider, TouchTransition } from 'react-dnd-multi-backend';
import btnBg from '../../assets/images/buttonLgGray.svg';
import { openTg } from '../../utils/openTg';
import { Button } from '../shared/Button';
import { GameScreen } from '../shared/GameScreen';
import { PuzzlesRow } from './PuzzlesRow';
import { Board } from './Board';
import { usePuzzleGame } from './use-puzzle-game';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: ${({isBlurred}) => isBlurred ? 'blur(10px)' : 'unset'};
`;

const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ButtonStyled = styled(Button)`
  margin-top: 30px;
  background-image: url(${btnBg});
  opacity: 0;
  color: #513C3E;
  animation: ${opacityAnim} 0.3s ease-in forwards;
`;

export const PuzzleScreen = () => {
    const [isBlurred, setIsBlurred] = useState(true);

    const {
        isWin,
        puzzles,
        onDrop,
        droppedPuzzles,
        shownPuzzles,
        onRemove,
    } = usePuzzleGame();

    const HTML5toTouch = {
        backends: [
            {
                id: 'html5',
                backend: HTML5Backend,
                transition: MouseTransition,
            },
            {
                id: 'touch',
                backend: TouchBackend,
                preview: true,
                transition: TouchTransition,
            },
        ],
    };

    const initialState = {
        text: 'Перетаскивай и расставляй\nкусочки так, чтобы получить\nцелое изображение',
        btnText: 'Начать'
    };

    return (
        <GameScreen initialState={initialState} onChangeState={() => setIsBlurred(false)}>
            <Wrapper isBlurred={isBlurred}>
                <DndProvider options={HTML5toTouch}>
                    <Board
                        isWin={isWin}
                        puzzles={puzzles}
                        onPuzzleDrop={onDrop}
                        droppedPuzzles={droppedPuzzles}
                    />
                    {isWin ? <ButtonStyled onClick={openTg}>Завершить</ButtonStyled>
                        : <PuzzlesRow
                            shownPuzzles={shownPuzzles}
                            onDrop={onRemove}
                        />
                    }
                </DndProvider>
            </Wrapper>
        </GameScreen>
    );
};
