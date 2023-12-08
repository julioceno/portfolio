import { RefObject, useEffect, useState } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  function handlePointerMove({ clientX, clientY }: MouseEvent) {
    const element = ref.current!;
    const sensitivity = 0.05;

    const x =
      (clientX - element.offsetLeft - element.offsetWidth / 2) * sensitivity;
    const y =
      (clientY - element.offsetTop - element.offsetHeight / 2) * sensitivity;

    setPoint({ x, y });
  }

  const handlePointerLeave = () => {
    setPoint({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!ref.current) return;

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [ref]);

  return point;
}
