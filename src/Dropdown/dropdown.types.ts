import { AppearanceType } from '../theme'
import { BaseInterface } from '../Base'

export interface DropdownInterface extends BaseInterface {
  appearance?: AppearanceType
  position?: string
  hover?: boolean
  noFlip?: boolean
  justify?: boolean
  opened?: boolean
}
