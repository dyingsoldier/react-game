import style from "./app.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"

function App() {
  function restartGame() {
    alert("Restart")
  }

  return (
    <div className={style.container}>
      <main>
        <Header current={5} max={10} onRestart={() => restartGame()} />
        <Tip tip={"Biblioteca para criar interfaces Web com Javascript."} />
      </main>
    </div>
  )
}

export default App
