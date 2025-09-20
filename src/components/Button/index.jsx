import style from "../Button/style.module.css"
/**
 * @param {import("react").ButtonHTMLAttributes<HTMLInputElement>} rest
 */
export function Button({ title, ...rest }) {
  return (
    <button type="button" className={style.button} {...rest}>
      {title}
    </button>
  )
}
