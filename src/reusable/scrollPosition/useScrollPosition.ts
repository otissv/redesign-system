export function useScrollPosition() {
  return () => ({
    top: window.pageYOffset || document.documentElement.scrollTop,
    left: window.pageXOffset || document.documentElement.scrollLeft,
  })
}
