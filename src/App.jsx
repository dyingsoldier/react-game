import style from "./app.module.css"

import { useCallback, useEffect, useState } from "react"

import { WORDS } from "./utils/words.js"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"
import { RestartGame } from "./components/restartGame"

function App() {
  // Pontuação atual
  const [score, setScore] = useState(0)

  // adicionando o challenge como desafios
  const [challenge, setChallenge] = useState(null)

  // letras compondo a palavra

  const [letter, setLetter] = useState("")

  // letras utilizadas
  const [lettersUsed, setLettersUsed] = useState([])

  const [isRestarting, setIsRestarting] = useState(false)

  // Quantia de Palavras e adicionando limite em tentativas
  const attemptLimit = challenge?.word.length
  const maxLimit = attemptLimit + Math.floor(attemptLimit / 2)

  const startGame = useCallback(function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setScore(0)
    setLetter("")
    setLettersUsed([])
    setIsRestarting(false)
  }, [])

  useEffect(() => {
    startGame()
  }, [startGame])

  const restartGame = useCallback(async function restartGame(del = 0) {
    if (del > 0) {
      setIsRestarting(true)
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    await delay(del)
    startGame()
  }, [startGame])

  useEffect(() => {
    if (!challenge) {
      return
    }

    const attemptLimit = challenge.word.length
    const maxLimit = attemptLimit + Math.floor(attemptLimit / 2)

    if (isRestarting) {
      return
    }

    if (score === attemptLimit) {
      restartGame(1000)
    } else if (lettersUsed.length === maxLimit) {
      restartGame(1000)
    }
  }, [challenge, isRestarting, restartGame, score, lettersUsed.length])

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return
    }

    const value = letter.toUpperCase()
    const exists = lettersUsed.find((used) => used.value.toUpperCase() === value)

    if (exists) {
      setLetter("")
      return
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

  }

  if (!challenge) {
    return null
  }

  if (isRestarting) {
    return <RestartGame />
  }

  return (
    <div className={style.container}>
      <main className={style.main}>
        <Header current={lettersUsed.length} max={maxLimit} onRestart={() => restartGame()} />
        <Tip tip={challenge.tip} />

        <div className={style.Letters}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase(),
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
