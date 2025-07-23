import MenuComponent from "../Menu";
import style from "./style.module.css";
import Icon from "@/app/components/Icons";

export default function NavbarComponent() {
  return (
    <div className={style.navbar}>
      <div className={style.logoArea}>
        <Icon icon={['fas', 'coffee']}/>
      </div>
      <div className={style.menuArea}>
        <MenuComponent />
      </div>
    </div>
  )
}