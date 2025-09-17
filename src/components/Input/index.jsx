import style from "../Input/style.module.css"
/**
 @param {import("react").InputHTMLAttributes<HTMLInputElement>} props
 */

export function Input({ ...props }) {
  return <input className={style.input} {...props} />
}
