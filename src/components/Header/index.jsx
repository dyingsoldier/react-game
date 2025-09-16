import style from "../Header/style.module.css"
import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

export function Header({ current, max, onRestart }) {
  return (
    <div className={style.container}>
      <img src={logo} alt="Logo" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button" onClick={onRestart}>
          <img src={restart} alt="icon de reinicio" />
        </button>
      </header>
    </div>
  )
}
