"use client";

import style from "./style.module.css";
import Icon from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";
import Bars from "@/assets/icons/bars-solid-full.svg"

export default function MenuComponent() {
  const { screenSize } = useTheme();
  return (
    <div>
      {screenSize.mobile && (
        <div>
          <Bars className={style.barrasMenu}/>  
        </div>
      )}


      
      
    </div>
  )
}