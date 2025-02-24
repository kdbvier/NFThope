import { ReactElement } from "react";
import { BasicProps } from "../../constants/BasicTypes";

export interface TabsProps extends BasicProps {
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
}

export interface TabProps extends BasicProps {
  selected: boolean;
  title: string | ReactElement;
  onClick?: () => void;
}
