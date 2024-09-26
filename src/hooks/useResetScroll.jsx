import { useEffect, useRef } from "react";

export const useResetScroll = (dependencies = []) => {
  const ref = useRef(null);
  useEffect( () => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, dependencies)
  return ref;
}