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
  const [score, setScore] = useState(0)
  const [challenge, setChallenge] = useState(null)
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

    setScore(0)
    setLetter("")
    setLettersUsed([])
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra")
    }

    const value = letter.toUpperCase()
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value
    )

    if (exists) {
      return alert(`Você ja digitou essa letra (${letter.toUpperCase()})`)
    }

    const hit = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length

    const correct = hit > 0
    const currentScore = score + hit

    setLetter("")
    setScore(currentScore)
    setLettersUsed((prevState) => [...prevState, { value, correct }])

    if (setScore > 10) {
      restartGame()
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
        <Header current={score} max={10} onRestart={() => restartGame()} />
        <Tip tip={challenge.tip} />

        <div className={style.Letters}>
          {challenge.word.split("").map((letter, index) => {
            console.log(lettersUsed)
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            )
            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            )
          })}
        </div>

        <h4>Palpite</h4>
        <div className={style.attempt}>
          <Input
            value={letter}
            autoFocus
            maxLength={1}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title={"Confirmar"} onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}

export default App
