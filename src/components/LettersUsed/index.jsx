import style from "./style.module.css"
import { Letter } from "../Letter"

export function LettersUsed({ data }) {
  return (
    <div className={`${style.lettersUsed}`}>
      <h5>Letras Utilizadas</h5>

      <div>
        {data.map(({ value, correct }) => (
          <Letter
            value={value}
            size="default"
            color={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  )
}
