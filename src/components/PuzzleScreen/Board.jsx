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

  @media screen and (max-width: 325px) {
    width: calc(323px * 0.8);
    height: calc(320px * 0.8);
    padding: calc(32px * 0.8) calc(34px * 0.8);
    background-size: contain;
  }

  @media screen and (min-width: 600px) {
    width: calc(323px * 1.3);
    height: calc(320px * 1.3);
    padding: calc(32px * 1.3) calc(34px * 1.3);
    background-size: contain;
  }
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
  @media screen and (max-width: 325px) {
    height: calc(128px * 0.8);
  }

  @media screen and (min-width: 600px) {
    height: calc(128px * 1.3);
  }
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
            <WinBoard isWin={isWin}/>
        </>
    );
};
