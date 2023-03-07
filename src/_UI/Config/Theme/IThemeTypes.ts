import theme from "./index";

declare module "styled-components" {
  type IThemeType = typeof theme;
  export interface DefaultTheme extends IThemeType {}
}
