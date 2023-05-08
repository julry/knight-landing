import styled from 'styled-components';
import { PuzzlePlace } from './PuzzlePlace';
import emptyBoard from './images/emptyPuzzleBoard.svg';
import fullBoard from './images/fullPuzzleBoard.svg';

const PuzzleBoardWrapper = styled.div`
  position: relative;
  width: 323px;
  height: 320px;
  z-index: 3;
  background: url(${emptyBoard}) no-repeat center;
  margin: 29px auto 0;
  padding: 32px 34px;
  opacity: ${({isWin}) => isWin ? '0' : '1'};
  transition: opacity 1s ease-in;
`;

const WinBoard = styled(PuzzleBoardWrapper)`
  position: absolute;
  top: 29px;
  left: 50%;
  z-index: 1;
  margin: 0;
  transform: translateX(-50%);
  opacity: ${({isWin}) => isWin ? '1' : '0'};
  transition: unset;
  background-image: url(${fullBoard});
`;

const PuzzleBoardRow = styled.div`
  display: flex;
  height: 128px;
  width: 100%;
  
`;

export const Board = (props) => {
    const {onPuzzleDrop, droppedPuzzles, isWin, puzzles = []} = props;
    return (
        <>
            <PuzzleBoardWrapper className={props.className} isWin={isWin}>
                {puzzles.map((puzzleRow, i) => (
                    <PuzzleBoardRow key={i} rowInd={i}>
                        {
                            puzzleRow && puzzleRow.map((puzzle) => <PuzzlePlace
                                key={puzzle.id}
                                isWin={isWin}
                                droppedPuzzles={droppedPuzzles}
                                onPuzzleDrop={onPuzzleDrop}
                                styles={puzzle.styles}
                                puzzle={puzzle}
                            />)
                        }
                    </PuzzleBoardRow>
                ))}
            </PuzzleBoardWrapper>
            <WinBoard  isWin={isWin}/>
        </>
);
};
