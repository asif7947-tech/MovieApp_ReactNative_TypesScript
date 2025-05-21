import { ColorValue } from "react-native";

export type T_App_Header = {
    onBackPress?:()=>void
    onMenuPress?:() => void;
    headerTitle:string,
    header_bg_color:ColorValue,
    isAddPopupMenu?:boolean,
  };