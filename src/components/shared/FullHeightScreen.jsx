import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ styles }) => styles};
  position: relative;
  overflow: hidden;
`;

export const FullHeightScreen = (props) => {
    const [height, setHeight] = useState('100vh');

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight + 'px');
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Wrapper className={props.className} styles={{ height }}>
            {props.children}
        </Wrapper>
    )
}