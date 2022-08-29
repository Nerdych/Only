import 'styled-components';
import { IBaseTheme } from './styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IBaseTheme {}
}
