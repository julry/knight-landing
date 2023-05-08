import React, { useEffect } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useScreenInit } from './hooks/useScreenInit';
import { ScreenProvider } from './context/ScreenContext';
import { preloadImage } from './utils/preloadImage';
import { QrScreen } from './components/QrScreen';

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
  const { screen } = progress;

  const Component = screen?.component || (() => null);

  useEffect(() => {
    const preloadImages = screen?.preloadImages;
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [screen]);

  return (
      <ScreenProvider value={progress}>
        <Wrapper>
            {isMobile ? <Component /> : <QrScreen />}
        </Wrapper>
      </ScreenProvider>
  )
}

export default App;
