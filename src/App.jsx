import style from "./app.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

function App() {
  function restartGame() {
    alert("Restart")
  }

  return (
    <div className={style.container}>
      <main className={style.main}>
        <Header current={5} max={10} onRestart={() => restartGame()} />
        <Tip tip={"Louco da cabeca."} />

        <div className={style.Letters}>
          <Letter value="M" />
          <Letter value="A" />
          <Letter value="N" />
          <Letter value="O" />
          <Letter value="E" />
          <Letter value="L" />
        </div>

        <h3>Palpite</h3>
        <div className={style.attempt}>
          <Input autoFocus maxLength={1} placeholder="M" />
          <Button title={"Confirmar"}  />
        </div>

        {/* <div className={style.content}>
          <h3>Letras utilizadas</h3>
          <div className={style.words}>
            <Letter value={"L"} />
            <Letter value={"A"} />
            <Letter value={"R"} />
            <Letter value={"I"} />
            <Letter value={"S"} />
            <Letter value={"A"} />
          </div>
        </div> */}
      </main>
    </div>
  )
}

export default App
