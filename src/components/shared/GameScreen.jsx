import { useEffect, useState } from 'react';
import { useScreen } from '../../hooks/useScreen';
import { Modal } from './Modal';
import { FullHeightScreen } from './FullHeightScreen';

export const GameScreen = ({initialState, finalState, children, onChangeState, isFinished, className}) => {
    const [modalState, setModalState] = useState({open: true, ...initialState});
    const {next} = useScreen();

    const onStart = () => {
        setModalState({open: false});
        onChangeState?.();
    };

    useEffect(() => {
        if (!isFinished) return;
        setModalState({open: true, ...finalState});
    }, [isFinished, finalState]);

    const handleClick = () => {
        if (isFinished) {
            next();
            return;
        }
        onStart();
    };

    return (
        <FullHeightScreen className={className}>
            {children}
            {modalState.open && (
                <Modal text={modalState.text} btnText={modalState.btnText} onClick={handleClick}/>
            )}
        </FullHeightScreen>
    );
};
