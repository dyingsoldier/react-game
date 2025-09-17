import style from "../Letter/style.module.css"

export function Letter({ value }) {
  return (
    <div className={style.letter}>
      <span>{value}</span>
    </div>
  )
}
