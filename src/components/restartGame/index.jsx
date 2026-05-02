import style from "./style.module.css"

export function RestartGame(){
  return (
    <div className={`${style.restartGame}`}>
      <h1>Reiniciando o Jogo Aguarde...</h1>
    </div>
  )
}
