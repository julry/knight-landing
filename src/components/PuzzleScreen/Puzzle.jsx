import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDrag, useDragLayer } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';

const PuzzleStyled = styled.div`
  ${({styles}) => styles};
  z-index: 10;
  -webkit-touch-callout: none;
  box-sizing: content-box;
  cursor: pointer;
`;

const StyledPuzzlePreview = styled(PuzzleStyled)`
  box-sizing: border-box;
  z-index: 13;
`;

export const Puzzle = (props) => {
    const {puzzle = {}, isWin, onDragStart} = props;
    const {id, position, styles} = puzzle;
    const dragRef = useRef();

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'PUZZLE',
        item: () => {
            onDragStart?.(id);
            return {id, position, styles};
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id]);

    const PuzzlePreview = (props) => {
        const {offset} = useDragLayer(monitor => ({
            offset: monitor.getClientOffset(),
        }));

        if (!isDragging || !offset || !offset?.x || !offset?.y) {
            return null;
        }

        const x = (offset?.x - 60) + 'px';
        const y = (offset?.y - 60) + 'px';

        const style = {
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            transform: `translate(${x}, ${y})`,
            WebkitTransform: `translate(${x}, ${y})`
        };

        return <StyledPuzzlePreview style={style} {...props}/>;
    };

    if (isDragging) {
        return <PuzzlePreview styles={styles}/>;
    }

    return (
        <PuzzleStyled
            styles={styles}
            ref={isWin ? null : mergeRefs([drag, dragRef])}
        />
    );
};
