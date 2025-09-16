import style from "../Tip/style.module.css"
import imageTip from "../../assets/tip.svg"

export function Tip({ tip }) {
  return (
    <div className={style.tip}>
      <img src={imageTip} alt="dica" className={style.icon} />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  )
}
