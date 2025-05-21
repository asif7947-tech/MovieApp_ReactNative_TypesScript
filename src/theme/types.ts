
export type T_SPACINGS = {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_32: number;
  space_36: number;
};

export type T_COLORS = {
  AppBackground: string;
  AppBgDark: string;
  TabBackground: string;
  TabHeadingColor: string;
  TabIndicatorBgColor: string;
  TabContainerBgColor: string;
  AppBarBgColor: string;
  Primary: string;
  Secondary: string;
  Tertiary: string;
  TabHeading: string;
  TabIcon: string;
  TabText: string;
  Text: string;
  Black: string;
  BlackRGBA0: string;
  BlackRGB10: string;
  BlackRGB20: string;
  Orange: string;
  OrangeRGBA0: string;
  Grey: string;
  DarkGrey: string;
  LightGrey: string;
  Yellow: string;
  White: string;
  WhiteRGBA75: string;
  WhiteRGBA50: string;
  WhiteRGBA32: string;
  WhiteRGBA15: string;
  SecondaryText: string;
  DateGray: string;
  AppBlueColor:string;
};

export type T_RADIUS = {
  4: number;
  8: number;
  12: number;
  16: number;
  20: number;
  24: number;
};

export interface I_APP_THEME {
  key:string,
  title:string,
  colors:T_COLORS;
}