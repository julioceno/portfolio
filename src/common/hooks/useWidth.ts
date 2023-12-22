import { useEffect, useState } from 'react';

function getBreakpoint(width: number) {
  if (width < 576) {
    return 'xs';
  } else if (width < 768) {
    return 'sm';
  } else if (width < 992) {
    return 'md';
  } else if (width < 1200) {
    return 'lg';
  } else {
    return 'xl';
  }
}

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;

      setWidth(newWidth);
      setBreakpoint(getBreakpoint(newWidth));
    };

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return { width, breakpoint };
}

export { useWidth };
