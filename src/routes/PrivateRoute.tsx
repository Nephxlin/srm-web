import React, { ReactElement } from "react";
import LayoutBase from "../_UI/Components/Template/LayoutBase";

type Props = {
  children: ReactElement
}


const PrivateRoute = ({ children }: Props) => {

  return (<LayoutBase>
    {children}
  </LayoutBase>)
}

export default PrivateRoute;
