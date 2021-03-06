import { BaseInterface } from '../Base'
import { AppearanceExtendedType } from '../theme'

export interface InputInterface extends BaseInterface {
  appearance?: AppearanceExtendedType
  stretch?: boolean
  onBlur?: (e: React.MouseEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.MouseEvent<HTMLInputElement>) => void
  placeholder?: string
  size?: number
  valid?: boolean
  value?: string
  widths?: number
}
