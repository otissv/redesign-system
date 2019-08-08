import { BaseInterface } from '../Base'
import { AppearanceExtendedType } from '../theme'

export interface CheckboxInterface extends BaseInterface {
  appearance?: AppearanceExtendedType
  checked?: boolean
  id?: string
  name?: string
  onBlur?: (e: React.MouseEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.MouseEvent<HTMLInputElement>) => void
}
