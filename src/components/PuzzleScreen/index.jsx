import styled, { keyframes } from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, DndProvider, TouchTransition } from 'react-dnd-multi-backend';
import btnBg from '../../assets/images/buttonLgGray.svg';
import { PuzzlesRow } from './PuzzlesRow';
import { Board } from './Board';
import { Button } from '../shared/Button';
import { GameScreen } from '../shared/GameScreen';
import { usePuzzleGame } from './use-puzzle-game';
import { useState } from 'react';

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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: blur(${({isBlurred}) => isBlurred ? '10px' : 0});
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
                    {isWin ? <ButtonStyled>Завершить</ButtonStyled>
                        : <PuzzlesRow
                            shownPuzzles={shownPuzzles}
                            onDrop={onRemove}
                        />
                    }
                </DndProvider>
            </Wrapper>
        </GameScreen>
    );
}