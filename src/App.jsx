import style from "./app.module.css"
import { useEffect, useState } from "react"

import { WORDS } from "./utils/words.js"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

function App() {
  const [challenge, setChallenge] = useState(null)
  const [attempt, setattempt] = useState(0)
  const [tip, setTip] = useState()
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState([])

  function restartGame() {
    alert("O Jogo foi reiniciado")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    console.log(randomWord)

    setChallenge(randomWord)

    setattempt("0")
    setLetter("")
    setTip(WORDS.tip)
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra")
    }
  }

  useEffect(() => {
    startGame()
  }, [])

  if (!challenge) {
    return
  }

  return (
    <div className={style.container}>
      <main className={style.main}>
        <Header current={attempt} max={10} onRestart={() => restartGame()} />
        <Tip tip={tip} />

        <div className={style.Letters}>
          {challenge.word.split("").map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Palpite</h4>
        <div className={style.attempt}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="M"
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title={"Confirmar"} onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />

        {/* <div className={style.content}>
          <h3>Letras utilizadas</h3>
          <div className={style.words}>
            <Letter value={"L"} />
            <Letter value={"A"} />
            <Letter value={"R"} />
            <Letter value={"I"} />
          </div>
        </div> */}
      </main>
    </div>
  )
}

export default App
