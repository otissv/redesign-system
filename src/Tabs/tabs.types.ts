import { BaseInterface } from '../Base'
import { ButtonInterface } from '../Button'
import { AppearanceType } from '../theme'
import { CollectionHashInitialValueInterface } from 'reusable/collectionHash'

export type TabsContextType = {
  active?: string
  appearance?: AppearanceType
  children?: React.ReactNode
  dispatch?: React.Dispatch<React.SetStateAction<any>>
  height?: string
  selected?: { [key: string]: any }
  size?: number
  stacked?: boolean
  stretch?: boolean
  width?: string
}

export interface TabsProviderInterface {
  active?: string
  appearance?: AppearanceType
  children?: React.ReactNode
  selected?: { [key: string]: any }
  size?: number
  stretch?: boolean
  height?: string
  width?: string
  stacked?: boolean
}

export interface TabsInterface extends BaseInterface {
  appearance?: AppearanceType
  children?: React.ReactNode
  height?: string
  size?: number
  stacked?: boolean
  stretch?: boolean
  width?: string
}

export interface TabsInitialStateInterface
  extends CollectionHashInitialValueInterface {
  stacked?: boolean
}

export interface TabsListInterface extends BaseInterface {
  active?: string
}

export interface TabPanelInterface extends BaseInterface {
  uid: string
  height?: string
  width?: string
}

export interface TabListButtonInterface extends ButtonInterface {
  uid: string
  title: string
}
