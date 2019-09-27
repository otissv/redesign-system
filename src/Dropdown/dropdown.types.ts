import { AppearanceType } from '../theme'
import { BaseInterface } from '../Base'

export interface DropdownInterface extends BaseInterface {
  appearance?: AppearanceType
  position?: string
  hover?: boolean
  flip?: boolean
  justify?: boolean
  opened?: boolean
  height?: string
}
