import React from 'react'

export interface RouterContextInterface {
  route?: string
  history?: string[]
  dispatch?: React.Dispatch<{
    type: string
    route: string
  }>
}

export interface RouterProviderInterface {
  active?: string
  children: React.ReactNode
  fallback?: React.ReactNode
}

export type ParamsType =
  | false
  | {
      [x: string]: string
    }

export type RouteTypes = {
  path?: string
  children?: RouteTypes[]
  component: any
}

export type RouterTypes = {
  routes: RouteTypes[]
  [key: string]: any
}
