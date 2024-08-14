import React, { FC, useContext, useEffect, useState } from 'react';
import { ScreenMediaContext } from '../contexts/screenMediaContexts';

const useHeightWidth = (elementId: string) => {
  const { clientWidth } = useContext(ScreenMediaContext)
  const [elementSize, setElementSize] = useState<{ elementWidth: number | undefined, elementHeight: number | undefined }>({ elementWidth: undefined, elementHeight: undefined });
  useEffect(() => {
    setElementSize({ elementWidth: window.document.getElementById(elementId)?.clientWidth, elementHeight: window.document.getElementById(elementId)?.clientHeight });
  }, [clientWidth]);
  useEffect(() => {
    setTimeout(() => {
      setElementSize({ elementWidth: window.document.getElementById(elementId)?.clientWidth, elementHeight: window.document.getElementById(elementId)?.clientHeight });
    }, 1000);
  }, [])
  return elementSize;
};
export default useHeightWidth;