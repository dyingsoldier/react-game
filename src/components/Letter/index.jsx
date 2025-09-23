import style from "../Letter/style.module.css"

export function Letter({ value = "", size = "default", color = "default" }) {
  return (
    <div
      className={`${style.letter}
                  ${size === "small" ? style.letterSmall : ""}
                  ${color === "correct" ? style.letterCorrect : ""}
                  ${color === "wrong" ? style.letterWrong : ""}`}
    >
      <span>{value}</span>
    </div>
  )
}
