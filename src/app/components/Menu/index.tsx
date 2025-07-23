"use client";

import style from "./style.module.css";
import Icon from "@/app/components/Icons";
import { useTheme } from "@/app/context/ThemeContext";

export default function MenuComponent() {
  const { screenSize } = useTheme();
  return (
    <div>
      {screenSize.mobile && (
        <span>Teste</span>
      )}


      
      
    </div>
  )
}