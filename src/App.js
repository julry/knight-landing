import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useScreenInit } from './hooks/useScreenInit';
import { ScreenProvider } from './context/ScreenContext';
import { preloadImage } from './utils/preloadImage';

const Wrapper = styled.div`
  background-size: cover;
  position: relative;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  white-space: pre-line;
`;

function App() {
  const progress = useScreenInit();
  const { screen, blockScroll } = progress;

  const Component = screen?.component || (() => null);

  useEffect(() => {
    const preloadImages = screen?.preloadImages;
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [screen]);

  return (
      <ScreenProvider value={progress}>
        <Wrapper>
          <Component />
        </Wrapper>
      </ScreenProvider>
  )
}

export default App;
