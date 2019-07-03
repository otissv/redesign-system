import { useEffect, useRef, useState } from 'react';

export function useContextMenu({ offset, area, onClosed, onOpened }) {
  const [visible, setVisible] = useState(false);
  const contextMenuRef = useRef<{ [key: string]: any }>({
    current: {},
  });

  function handleContextMenu(e: any) {
    e.preventDefault();
    if (area != null && e.currentTarget.dataset.contextarea !== area) {
      return;
    }

    setVisible(true);

    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = contextMenuRef.current.offsetWidth;
    const rootH = contextMenuRef.current.offsetHeight;

    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      contextMenuRef.current.style.left = `${clickX + offset}px`;
    }

    if (left) {
      contextMenuRef.current.style.left = `${clickX - rootW - offset}px`;
    }

    if (top) {
      contextMenuRef.current.style.top = `${clickY + offset}px`;
    }

    if (bottom) {
      contextMenuRef.current.style.top = `${clickY - rootH - offset}px`;
    }
    onOpened && onOpened(e, true);
  }

  function handleClick(e: any) {
    e.preventDefault();
    if (!visible) return;
    setVisible(false);
    onClosed && onClosed(e, false);
  }

  function handleScroll() {
    if (visible) setVisible(false);
  }

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return [{ contextMenuRef, visible }];
}
