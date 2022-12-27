import { useEffect } from 'react';
import type { MutableRefObject } from 'react';

export function useOutsideClick(ref: MutableRefObject<HTMLHtmlElement | null>, isActive: boolean, handler: () => void) {
  useEffect(() => {
    if (!isActive) return;
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, isActive]);
}
