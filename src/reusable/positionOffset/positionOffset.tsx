import { either } from '../../utils/either.util'

interface OffsetInterface {
  boundary?: HTMLElement
  element: HTMLElement
  flip?: boolean
  target: HTMLElement
}

export const pos = (element: HTMLElement) => {
  return {
    top: element.offsetTop,
    left: element.offsetLeft,
  }
}

export const dim = (element: HTMLElement) => {
  return {
    height: element.offsetHeight,
    width: element.offsetWidth,
  }
}

export function offset({ boundary, element, flip, target }: OffsetInterface) {
  let boundaryDim: { height: number; width: number }

  if (boundary) {
    boundaryDim = dim(boundary)
  } else {
    boundaryDim = {
      width: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      height: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      ),
    }
  }

  const targetDetails = {
    pos: pos(target),
    dim: dim(target),
    boundary: target.getBoundingClientRect(),
  }

  const elementDetails = {
    pos: pos(element),
    dim: dim(element),
    boundary: element.getBoundingClientRect(),
  }
  // console.log({ elementDetails, targetDetails })

  const horFlip = either(
    () => elementDetails.boundary.top + elementDetails.dim.height,
    () => elementDetails.boundary.top - targetDetails.dim.height
  )

  const lrVerFlip = either(
    () => elementDetails.boundary.left + elementDetails.dim.width,
    () => elementDetails.boundary.left - targetDetails.dim.width
  )

  const tbVerLeft = elementDetails.boundary.left
  const tbVerRight =
    elementDetails.boundary.left +
    elementDetails.dim.width -
    targetDetails.dim.width

  let top: number
  let bottom: number
  let lrHorLeft: number
  let lrHorRight: number

  if (flip) {
    top = horFlip(targetDetails.boundary.top - elementDetails.dim.height < 0)
    bottom = horFlip(
      targetDetails.boundary.top +
        elementDetails.dim.height +
        targetDetails.dim.height <
        boundaryDim.height
    )
    lrHorLeft = lrVerFlip(
      targetDetails.boundary.left - elementDetails.dim.width < 0
    )
    lrHorRight = lrVerFlip(
      targetDetails.boundary.left +
        elementDetails.dim.width +
        targetDetails.dim.width <
        boundaryDim.width
    )
  } else {
    top = horFlip(false)
    bottom = horFlip(true)
    lrHorLeft = lrVerFlip(false)
    lrHorRight = lrVerFlip(true)
  }

  const horCenter =
    elementDetails.boundary.left +
    elementDetails.dim.width -
    (elementDetails.dim.width + targetDetails.dim.width) / 2

  const verCenter =
    bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2

  const positions = {
    'bottom-left': { top: bottom, left: tbVerLeft },
    'bottom-center': { top: bottom, left: horCenter },
    'bottom-right': { top: bottom, left: tbVerRight },

    'top-left': { top: top, left: tbVerLeft },
    'top-center': { top: top, left: horCenter },
    'top-right': { top: top, left: tbVerRight },

    'left-top': { top: top, left: lrHorLeft },
    'left-center': { top: verCenter, left: lrHorLeft },
    'left-bottom': { top: bottom, left: lrHorLeft },

    'right-top': { top: top, left: lrHorRight },
    'right-center': { top: verCenter, left: lrHorRight },
    'right-bottom': { top: bottom, left: lrHorRight },
  }

  return function(position?: any) {
    return positions[position] || positions['bottom-left']
  }
}

export function usePositionOffset() {
  return {
    dim: (element: HTMLElement) => dim(element),
    offset: (options: OffsetInterface) => offset(options),
    pos: (element: HTMLElement) => pos(element),
  }
}
