import { useState } from "react";
import { useEffect } from "react";

function useWindowSize(value: number) {
  const [windowSize, setWindowSize] = useState({
    width: value,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize.width < value;
}

export default useWindowSize;
